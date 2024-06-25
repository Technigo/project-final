import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NavBarNoHover } from "../components/NavBarNoHover";

export const NotFoundPage = () => {
  const notFoundImg = "./backgroundImages/notFound.jpg";

  const navigate = useNavigate();
  return (
    <>
      <NavBarNoHover />
      <div className="flex sm:flex-col sm:gap-y-[50px] md:flex-row justify-center items-center h-screen gap-x-[30px]">
        <div className="flex flex-col sm:items-center sm:gap-y-3 justify-center md:items-start md:gap-y-1">
          <h1 className="text-h2sm text-fontColor">
            Oops! The page you were looking for doesn't exist
          </h1>
          <p className="text-textlg text-fontColor">
            You may have misstyped the address or the page may have moved.
          </p>
          <button
            onClick={() => navigate("/")}
            className="border-none bg-weather1 rounded-[15px] p-2 text-fontColor text-textmd transition-transform duration-300 hover:scale-105"
          >
            Back to Home
          </button>
        </div>
        <img
          src={notFoundImg}
          alt="a picture shows the page is not found"
          className="sm:w-[265px] sm:h-[245px] w-[512px] h-[512px] object-cover rounded"
        />
      </div>
      <Footer />
    </>
  );
};