'use client';

import { IBeer } from '@/types/beers';
import { FormEventHandler, useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { deleteToDo, editToDo } from '@/public/api';

interface BeerProps {
  beer: IBeer;
}

const Beer: React.FC<BeerProps> = ({ beer }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [beerToEdit, setBeerToEdit] = useState<string>(beer.text);

  const handleSubmitEditToDo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editToDo({
      id: beer.id,
      text: beerToEdit,
    });
    setBeerToEdit('');
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteBeer = async (id: string) => {
    await deleteToDo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <tr key={beer.id}>
      <td className="w-full">{beer.text}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          size={25}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditToDo}>
            <h3 className="font-bold text-lg">Edit beer</h3>
            <div className="modal-action">
              <input
                value={beerToEdit}
                onChange={(e) => setBeerToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modal>

        <FiTrash2
          onClick={() => setOpenModalDelete(true)}
          cursor="pointer"
          className="text-red-500"
          size={25}
        />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-lg">Are you sure, you want to delete?</h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteBeer(beer.id)} className="btn">
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Beer;
