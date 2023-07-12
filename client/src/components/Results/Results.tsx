import React from 'react';
import { useTypedSelector } from 'hooks/useTypedSelector';
import './Results.scss';

const Results: React.FC = () => {
  const { totalCount } = useTypedSelector((state) => state.quiz);
  const { correctAnswers } = useTypedSelector((state) => state.result);

  return (
    <div className="result">
      <h2>Ваш результат</h2>
      <div className="green">{correctAnswers} правильных ответов</div>
      <div className="red">{totalCount - correctAnswers} неправильных ответов</div>
    </div>
  );
};

export default Results;
