import React, { useState, createContext, useContext } from "react";
import Cookies from "js-cookie";
const defaultContext = {
  isOpen: false,
};

const Context = createContext(defaultContext);

export const AppProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(defaultContext.isOpen);
  const [modalBody, setModalBody] = useState("");
  const [loader, setLoader] = useState(false);
  const [acceptCookies, setAcceptCookies] = useState(!!Cookies.get('privacy') || false);

  const value = {
    isOpenModal,
    modalBody,
    loader,
    acceptCookies,
    setLoader,
    setModalBody,
    setIsOpenModal,
    setAcceptCookies
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export const useAppContext = () => useContext(Context);
