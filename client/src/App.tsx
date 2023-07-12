import React from 'react';
import { Footer, Header } from 'antd/es/layout/layout';
import Main from 'components/Main/Main';
import img from 'assets/quiz.png';
import 'styles/app.scss';

export function App() {
  return (
    <div className="wrapper">
      <Header style={{ backgroundColor: 'white' }}>
        <img src={img} height={100} width={100} alt="Логотип" />
      </Header>
      <Main />
      <Footer style={{ textAlign: 'center', backgroundColor: 'white' }}>
        ©2023 Created by Marine Darbinyan
      </Footer>
    </div>
  );
}
