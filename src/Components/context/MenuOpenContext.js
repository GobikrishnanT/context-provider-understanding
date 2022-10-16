import React, { useState } from 'react';

const CheckingContext = React.createContext();

function MenuOpenContext({ children }) {
  const [menu1State, setMenu1State] = useState(false);
  const [menu2State, setMenu2State] = useState(false);
  const [menu3State, setMenu3State] = useState(false);

  const value = {
    menu1State,
    menu2State,
    menu3State,
    setMenu1State,
    setMenu2State,
    setMenu3State,
  };

  return (
    <CheckingContext.Provider value={value}>
      {children}
    </CheckingContext.Provider>
  );
}

export default MenuOpenContext;
export { CheckingContext };
