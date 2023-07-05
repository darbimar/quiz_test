import React, { useEffect } from 'react';
import { Button, Pagination, Result, Spin } from 'antd';
import Question from 'components/Question/Question';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useAction';

const Main: React.FC = () => {
  const { questions, loading, error } = useTypedSelector((state) => state.quiz);

  const { fetchQuestions } = useActions();

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (loading) {
    return (
      <Spin spinning size="large">
        <div className="content" />
      </Spin>
    );
  }

  if (error) {
    return (
      <Result
        status="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  }

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
