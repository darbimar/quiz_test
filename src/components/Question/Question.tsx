import React, { useState } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { QuestionState } from 'store/types/quiz';

const Question: React.FC<QuestionState> = ({ question, options, correctAnswer }) => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.value}`);
  };

  return (
    <>
      <div>{question}</div>
      {options.map((item, i) => (
        <Checkbox key={i} onChange={onChange}>
          {item}
        </Checkbox>
      ))}
    </>
  );
};

export default Question;
