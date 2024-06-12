import { useNavigate } from "react-router-dom";
import { logout } from "../registration/authService";
import { useModal } from "../registration/ModalContext";
import { Button } from "../../utilities/Button";
import { AuthForm } from "./AuthForm";

export const Logout = () => {
  const navigate = useNavigate();
  const { showModal } = useModal();

  const handleLogout = () => {
    logout();
    navigate("/find-out-more");
  };

  return (
    <Button
      onClick={handleLogout}
      text="Log Out"
      varian="primary"
      className="mt-6"
    ></Button>
  );
};
