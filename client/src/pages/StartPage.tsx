import React, { useEffect, useState } from 'react';
import MyModal from 'components/MyModal/MyModal';
import LoginForm from 'components/LoginForm/LoginForm';
import RegistartionForm from 'components/RegistrationForm/RegistrationForm';
import Notification from 'components/Notification/Notification';
import { useTypedSelector } from 'hooks/useTypedSelector';

const StartPage = () => {
  const [RegistrationForm, setRegistrationForm] = useState(false);
  const { notificationMessage } = useTypedSelector((state) => state.auth);

  const handleShowForm = () => {
    setRegistrationForm(true);
  };

  const handleHideForm = () => {
    if (RegistartionForm) {
      setRegistrationForm(false);
    }
  };

  return (
    <>
      <Notification />
      {RegistrationForm ? (
        <MyModal title="Регистрация" onHide={handleHideForm} RegistrationForm={RegistrationForm}>
          <RegistartionForm handleHideReg={handleHideForm} />
        </MyModal>
      ) : (
        <MyModal title="Авторизация">
          <LoginForm showRegForm={handleShowForm} />
        </MyModal>
      )}
    </>
  );
};

export default StartPage;
