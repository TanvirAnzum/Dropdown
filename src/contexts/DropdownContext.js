import React, { createContext, useReducer } from "react";
import { initState, reducer } from "../reducers/reducer";

export const DropdownContext = createContext();

const DropdownContextProvider = ({ children }) => {
  const [dropdownState, dispatch] = useReducer(reducer, initState);

  return (
    <DropdownContext.Provider value={{ dropdownState, dispatch }}>
      {children}
    </DropdownContext.Provider>
  );
};

export default DropdownContextProvider;
