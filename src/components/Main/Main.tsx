import React, { useEffect, useState } from 'react';
import { Button, Pagination, Result, Spin } from 'antd';
import Question from 'components/Question/Question';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { fetchQuestions } from 'store/action_creators/quiz';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import Results from 'components/Results/Results';
import { showQuizResult } from 'store/action_creators/result';
import { getPagesCount } from 'utils/pages';

const Main: React.FC = () => {
  const [finish, setFinished] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const { questions, loading, error, totalCount } = useTypedSelector((state) => state.quiz);
  const { showResult } = useTypedSelector((state) => state.result);
  const questionsCount: number = 5;

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    setTotalPages(getPagesCount(totalCount, questionsCount));
  }, [totalCount]);

  useEffect(() => {
    dispatch(fetchQuestions(questionsCount, page));
  }, [page]);

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

  const finishQuiz = () => {
    dispatch(showQuizResult());
    setFinished(true);
  };

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  return (
    <div>
      {questions.length > 0 && (
        <div>
          {questions.map((item, id) => {
            return (
              <Question
                key={id}
                question={item.question}
                options={item.options}
                correctAnswer={item.correctAnswer}
                finish={finish}
              />
            );
          })}
        </div>
      )}
      <Pagination
        defaultCurrent={page}
        onChange={handleChangePage}
        pageSize={questionsCount}
        total={totalCount}
      />
      {page === totalPages && <Button onClick={finishQuiz}>Узнать результат</Button>}
      {showResult && <Results />}
    </div>
  );
};

export default Main;
