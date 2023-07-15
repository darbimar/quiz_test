import React, { useState } from 'react';
import MyModal from 'components/MyModal/MyModal';
import LoginForm from 'components/LoginForm/LoginForm';
import RegistartionForm from 'components/RegistrationForm/RegistrationForm';

const StartPage = () => {
  const [RegistrationForm, setRegistrationForm] = useState(false);

  const handleShowForm = () => {
    setRegistrationForm(true);
  };

  const handleHideForm = () => {
    setRegistrationForm(false);
  };

  return (
    <>
      {RegistrationForm ? (
        <MyModal title="Регистрация" onHide={handleHideForm}>
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
