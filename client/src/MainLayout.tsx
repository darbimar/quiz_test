import React, { FC } from 'react';
import { Footer, Header } from 'antd/es/layout/layout';
import img from 'assets/quiz.png';
import 'styles/app.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { logout } from 'store/action/auth';

const MaynLayout: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="wrapper">
      <Header className="header">
        <img src={img} height={100} width={100} alt="Логотип" />
        {isAuth && (
          <Button type="link" onClick={handleLogout}>
            Выход
          </Button>
        )}
      </Header>
      <Outlet />
      <Footer className="footer">©2023 Created by Marine Darbinyan</Footer>
    </div>
  );
};

export default MaynLayout;
