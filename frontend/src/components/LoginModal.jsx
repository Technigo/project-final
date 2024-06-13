import Modal from "react-modal"
import styled from "styled-components"
import { LoginPage } from "../pages/LoginPage"

Modal.setAppElement("#root")

export const LoginModal = ({ isOpen, onRequestClose, onLoginSuccess }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      overlayElement={(props, contentElement) => (
        <Overlay {...props}>{contentElement}</Overlay>
      )}>
      <LoginPage redirectOnLogin={false} onLoginSuccess={onLoginSuccess} />
    </Modal>
  )
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 998;
`
