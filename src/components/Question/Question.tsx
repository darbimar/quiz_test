import React, { Dispatch, useState } from 'react';
import { Checkbox } from 'antd';
import { selectCorrectAnswer } from 'store/action_creators/result';
import { useDispatch } from 'react-redux';

type QuestionProps = {
  question: string;
  options: string[];
  correctAnswer: string;
  finish: boolean;
};

const Question: React.FC<QuestionProps> = ({ question, options, correctAnswer, finish }) => {
  const [clicked, setClicked] = useState(false);
  const dispatch: Dispatch<any> = useDispatch();

  const onChange = (answer: string) => {
    if (answer === correctAnswer) {
      dispatch(selectCorrectAnswer(1));
    }
  };

  return (
    <>
      <div>{question}</div>
      {options.map((item, id) => (
        <Checkbox
          key={id}
          disabled={clicked || finish}
          onChange={() => onChange(item)}
          onClick={() => setClicked(true)}>
          <div className={clicked && item === correctAnswer ? 'green' : clicked ? 'red' : null}>
            {item}
          </div>
        </Checkbox>
      ))}
    </>
  );
};

export default Question;
