import React, { useContext } from 'react';
import { CheckingContext } from '../context/MenuOpenContext';

function ButtonComponents() {
  const { setMenu1State, setMenu2State, setMenu3State } =
    useContext(CheckingContext);

  function handleButtonClick(e, clickedButton) {
    console.log(e.target.tagName);
    console.log(clickedButton);
    if (e.target.tagName !== 'BUTTON' || e.textContent === '') {
      return;
    }
    if (clickedButton.toLowerCase() === 'model1') {
      setMenu1State((prev) => !prev);
    } else if (clickedButton.toLowerCase() === 'model2') {
      setMenu2State((prev) => !prev);
    } else {
      setMenu3State((prev) => !prev);
    }
  }

  return (
    <div
      className="flex-sb-all-row width-100 p-10"
      onClick={(e) => handleButtonClick(e, e.target.textContent)}
    >
      <button className="button-config">Model1</button>
      <button className="button-config">Model2</button>
      <button className="button-config">Model3</button>
    </div>
  );
}

export default ButtonComponents;
