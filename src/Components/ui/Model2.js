import React, { useContext } from 'react';
import { CheckingContext } from '../context/MenuOpenContext';

function Model2() {
  const { menu2State } = useContext(CheckingContext);
  console.log('Menu - 2 - state');

  return (
    <div className={menu2State ? '' : 'model-close'}>Model - 2 opened</div>
  );
}

export default Model2;
