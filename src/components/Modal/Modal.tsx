import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { ModalContentType } from '../../pages/ModalPage';
interface ModalProps {
  modalData: ModalContentType;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ modalData, closeModal }) => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    "<div class='modal-container'></div>"
  );
  useEffect(() => {
    document.body!.classList.add('overflow-hidden');
    return () => {
      const ModalContainer = document.querySelector('.modal-container')!;
      document.body.removeChild(ModalContainer);
      document.body!.classList.remove('overflow-hidden');
    };
  });
  const handleCloseBtn = () => {
    closeModal();
  };

  return ReactDOM.createPortal(
    <>
      <div
        onClick={handleCloseBtn}
        className="fixed inset-0 bg-gray-300 opacity-80 z-30"
      ></div>
      <div className="fixed inset-10 sm:inset-40 z-40 bg-white p-5 xs:p-10 rounded">
        <div className="flex justify-end">
          <AiFillCloseCircle
            onClick={handleCloseBtn}
            className="cursor-pointer text-3xl text-gray-500"
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <h1 className="text-lg font-bold mb-4">{modalData.title}</h1>
          <p className="overflow-auto">{modalData.content}</p>
          <div className="flex justify-end py-6">{modalData.actionBars}</div>
        </div>
      </div>
    </>,
    document.querySelector('.modal-container')!
  );
};

export default Modal;
