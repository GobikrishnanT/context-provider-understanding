import React, { useContext } from 'react';
import { CheckingContext } from '../context/MenuOpenContext';

function Model3() {
  const { menu3State } = useContext(CheckingContext);
  console.log('Menu - 3 - state', menu3State);

  return (
    <div className={menu3State ? '' : 'model-close'}>Model - 3 opened</div>
  );
}

export default Model3;
