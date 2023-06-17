import { useState } from 'react';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
export interface ModalContentType {
  title: string;
  content?: string;
  actionBars?: React.ReactNode;
}

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const ModalData: ModalContentType = {
    title:
      'Agreement: Please read it carefully and accept or reject it.',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, a",
    actionBars: (
      <div>
        <Button
          className="mr-4"
          success
          onClick={() => {
            alert('Thanks for your acceptance!');
            closeModal();
          }}
          rounded
        >
          Accept
        </Button>
        <Button
          onClick={() => {
            closeModal();
            alert('I hope to accept it next time.');
          }}
          danger
          rounded
        >
          Reject
        </Button>
      </div>
    ),
  };
  function handleModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  return (
    <>
      <Button onClick={handleModal} className="" rounded success>
        Open Modal
      </Button>
      {showModal && <Modal modalData={ModalData} closeModal={closeModal} />}
    </>
  );
};

export default ModalPage;
