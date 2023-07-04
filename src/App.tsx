import React from 'react';
import { Footer, Header } from 'antd/es/layout/layout';
import Main from 'components/Main/Main';
import 'styles/app.scss';

export function App() {
  return (
    <>
      <Header style={{ backgroundColor: 'white' }}>Quiz</Header>
      <Main />
      <Footer />
    </>
  );
}
