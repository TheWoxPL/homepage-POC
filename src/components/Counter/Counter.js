import React, { useState } from 'react';

import { button, container, display } from './Counter.module.scss';

export const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const handleClickButton = (value) => {
    if (value == -1 && counterValue == 0) return;
    setCounterValue(counterValue + value);
  };

  return (
    <div className={`${container}`}>
      <div className={`${display}`}>
        <span>{counterValue}</span>
      </div>
      <button className={`${button}`} onClick={() => handleClickButton(-1)}>
        Decrease
      </button>
      <button className={`${button}`} onClick={() => handleClickButton(1)}>
        Increase
      </button>
    </div>
  );
};
