import React, { useContext } from 'react';
import { CheckingContext } from '../context/MenuOpenContext';

function Model1() {
  const { menu1State } = useContext(CheckingContext);
  console.log('Menu - 1 - state');
  return (
    <div className={menu1State ? '' : 'model-close'}>Model - 1 opened</div>
  );
}

export default Model1;
