import React, { useEffect, useState } from 'react';
import { Button, Pagination } from 'antd';
import axios from 'axios';
import Question from 'components/Question/Question';

export interface QuestionState {
  question: string;
  options: string[];
  correctAnswer: string;
}

const Main: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionState[]>([]);

  async function fetchQuestions() {
    const url = 'http://localhost:3001/questions';
    const response = await axios.get(url);
    setQuestions((prevQuestions) => [...prevQuestions, ...response.data]);
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div>
      {questions.length > 0 && (
        <div>
          {questions.map((item, i) => {
            return (
              <Question
                key={i}
                question={item.question}
                options={item.options}
                correctAnswer={item.correctAnswer}
              />
            );
          })}
        </div>
      )}
      <Pagination simple defaultCurrent={1} total={20} />
      <Button onClick={fetchQuestions} />
    </div>
  );
};

export default Main;
