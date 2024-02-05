import React, { useState, createContext, useContext } from "react";
const defaultContext = {
  isOpen: false,
};

const Context = createContext(defaultContext);

export const AppProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(defaultContext.isOpen);
  const [modalBody, setModalBody] = useState("");
  const [loader, setLoader] = useState(false);

  const value = {
    isOpenModal,
    modalBody,
    loader,
    setLoader,
    setModalBody,
    setIsOpenModal,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export const useAppContext = () => useContext(Context);
