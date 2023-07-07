import React, { Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox } from 'antd';
import { selectCorrectAnswer } from 'store/action_creators/result';
import './Question.scss';

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
    <div className="question">
      <h3>{question}</h3>
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
    </div>
  );
};

export default Question;
