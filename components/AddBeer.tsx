'use client';

import React, { FormEventHandler, useState } from 'react';
import CustomButton from './CustomButton';
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from './Modal';
import { addToDo } from '@/api';
import { useRouter } from 'next/navigation';
import { uuid } from 'uuidv4';

const AddBeer = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newBeerValue, setNewBeerValue] = useState<string>('');

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addToDo({
      id: uuid(),
      text: newBeerValue,
    });
    setNewBeerValue('');
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <CustomButton
        title="New Beer "
        containerStyles="text-primary-black font-inter hover:text-stone-400 duration-300 ease-in flex items-center justify-center>"
        buttonType="button"
        handleClick={() => setModalOpen(true)}
      >
        <AiOutlinePlus className="ml-2" />
      </CustomButton>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new beer</h3>
          <div className="modal-action">
            <input
              value={newBeerValue}
              onChange={(e) => setNewBeerValue(e.target.value)}
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
    </div>
  );
};

export default AddBeer;
