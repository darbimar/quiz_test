import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MaynLayout from 'MainLayout';
import StartPage from 'pages/StartPage';
import QuizPage from 'pages/QuizPage';
import { useDispatch } from 'react-redux';
import { auth } from 'store/action-creators/auth';
import ErroPage from 'pages/ErrorPage';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(auth());
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MaynLayout />}>
        <Route index element={<StartPage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="*" element={<ErroPage />} />
      </Route>
    </Routes>
  );
}
