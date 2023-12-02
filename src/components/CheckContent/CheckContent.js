import React, { useState } from 'react';

import { button, container, greenBorder, text} from './CheckContent.module.scss';

export const CheckContent = () => {
  const [textValue, setTextValue] = useState('turned off');
  const [textButton, setTextButton] = useState('turn on');
  const [textClass, setTextClass] = useState(text)

  const handleButtonClick = () => {
    (textValue=="turned off")?setTextValue("turned on"):setTextValue("turned off");
    (textButton=="turn on")?setTextButton("turn off"):setTextButton("turn on");
    (textClass==text)?setTextClass(greenBorder):setTextClass(text);
  };
  return (
    <>
      <div className={`${container}`}>
        <p className={textClass}>{textValue}</p>
        <button className={`${button}`} onClick={handleButtonClick}>
          {textButton}
        </button>
      </div>
    </>
  );
};

