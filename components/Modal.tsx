import React from 'react';

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <dialog className={`modal ${modalOpen ? "modal-open" : ""} `}>
      <div className="modal-box bg-opacity-100 inset-0 z-20 shadow-lg bg-white">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button 
              onClick={() => setModalOpen(false)} 
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
