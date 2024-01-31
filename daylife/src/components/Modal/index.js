import React from "react";
import { useModal } from "@/utils/context";
import { FaXmark } from "react-icons/fa6";
import Button from "../Button";

const Modal = ({ children }) => {
  const { isOpenModal, setIsOpenModal } = useModal();

  if (!setIsOpenModal) {
    return null;
  }
  return (
    <div
      id="sendMessage"
      className={`send popup z-100 ${isOpenModal ? "visible opacity-100 " : "invisible z-under opacity-0"}  fixed left-0 top-0 h-full w-full transition-all duration-500`}
    >
      <div
        className="overlay fixed left-0 top-0 z-40 h-full  w-full bg-black opacity-50"
        onClick={() => setIsOpenModal(false)}
      ></div>
      <div
        className={`body ${isOpenModal ? "visible -translate-x-2/4 -translate-y-2/4 opacity-100 " : "invisible -translate-x-2/4 -translate-y-1/3 opacity-0 "} absolute-center z-100 absolute left-2/4 top-2/4 mx-auto min-h-[33.25rem]  min-w-360 rounded-large bg-secondary shadow-3xl transition-all duration-500 md:min-w-360 lg:min-h-[38.75rem] lg:min-w-900`}
      >
        <div className="content">
          <div className="py-5 pr-5 text-right lg:py-8 lg:pr-8 ">
            <Button
              classes="close group border-[1px] rounded-md border-transparent hover:bg-primary bg-transparent transition-colors duration-300 text-primary visited:text-primary active:text-primary"
              onClick={() => setIsOpenModal(false)}
            >
              <FaXmark className="group-hover:text-white text-primary transition-colors duration-300 text-2xl" />
            </Button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
