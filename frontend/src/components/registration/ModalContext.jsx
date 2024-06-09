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
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "30%",
            zIndex: 1000,
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          {content}
        </div>
      )}
    </ModalContext.Provider>
  );
};
