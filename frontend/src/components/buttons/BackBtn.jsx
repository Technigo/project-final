import { useNavigate } from "react-router-dom";
import { BackArrow } from "../iconFolder/BackArrow";

export const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex flex-row gap-2 p-3 transition-transform duration-300 hover:scale-110"
      aria-label="Go back"
    >
      <BackArrow />
      <p className="text-textlg">Back</p>
    </button>
  );
};
