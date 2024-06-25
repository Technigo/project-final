import { useNavigate, useLocation } from "react-router-dom";
import { BackArrow } from "../iconFolder/BackArrow";

export const BackHome = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  let arrowColor;
  if (location.pathname === "/login") {
    arrowColor = "#FFFFFF";
  } else if (location.pathname === "/signup") {
    arrowColor = "#020209";
  }

  return (
    <button
      onClick={() => navigate("/")}
      className={`${className}`}
      aria-label="Go back to home"
    >
      <BackArrow fill={`${arrowColor}`} />
      <p className="text-textlg">Back to home</p>
    </button>
  );
};
