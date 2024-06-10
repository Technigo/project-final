import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState(null);

  const showModal = (component) => {
    setContent(component);
    setIsVisible(true);
  };

  const hideModal = () => {
    setIsVisible(false);
    setContent(null);
  };
  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-dark bg-opacity-50 z-50">
          {content}
        </div>
      )}
    </ModalContext.Provider>
  );
};
