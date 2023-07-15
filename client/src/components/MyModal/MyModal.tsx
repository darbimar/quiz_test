import React, { useState } from 'react';
import { Button, Modal } from 'antd';

type ModalProps = {
  title: string;
  onHide?: () => void;
};

const MyModal: React.FC<ModalProps> = ({ children, title, onHide }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    onHide();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Начать Quiz
      </Button>
      <Modal
        centered
        footer={null}
        title={title}
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}>
        {children}
      </Modal>
    </>
  );
};

export default MyModal;
