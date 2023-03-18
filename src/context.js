import React, { useContext, createContext, useState } from "react";
 
const numDefult: number = 0;
const BtnContext = createContext(numDefult);
 
export const BtnProvider: React.FC = ({ children }) => {
  const [num, setNum] = useState(1);
  return (
    <>
      <BtnContext.Provider value={num}>{children}</BtnContext.Provider>
    </>
  );
};
 
export const useBtnContext = () => {
  return useContext(BtnContext);
};