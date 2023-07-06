import { useTypedSelector } from 'hooks/useTypedSelector';
import React from 'react';

const Results: React.FC = () => {
  const { questions } = useTypedSelector((state) => state.quiz);
  const { correctAnswers } = useTypedSelector((state) => state.result);

  return (
    <div>
      <h2>Ваш результат</h2>
      <div>{correctAnswers} правильных ответов</div>
      <div>{questions.length - correctAnswers} неправильных ответов</div>
    </div>
  );
};

export default Results;
