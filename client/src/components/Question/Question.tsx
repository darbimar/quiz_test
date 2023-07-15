import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { selectCorrectAnswer } from 'store/action/result';
import './Question.scss';

type QuestionProps = {
  question: string;
  options: string[];
  correctAnswer: string;
  finish: boolean;
};

const Question: React.FC<QuestionProps> = ({ question, options, correctAnswer, finish }) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event: CheckboxChangeEvent) => {
    if (event.target.name === correctAnswer) {
      dispatch(selectCorrectAnswer(1));
    }
  };

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="question">
      <h3>{question}</h3>
      {options.map((item, id) => (
        <Checkbox
          name={item}
          key={id}
          disabled={clicked || finish}
          onChange={handleChange}
          onClick={handleClick}>
          <div className={clicked && item === correctAnswer ? 'green' : clicked ? 'red' : null}>
            {item}
          </div>
        </Checkbox>
      ))}
    </div>
  );
};

export default Question;
