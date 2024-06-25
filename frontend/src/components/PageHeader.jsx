import React from "react";
import Pageheader from "./Pageheader.json";
import { NavBarNoHover } from "./NavBarNoHover";
import { useAuthData } from "../contexts/AuthContext";
import { NavBarLogedIn } from "./NavBarLogedIn";

export const PageHeader = ({ placeName }) => {
  const header = Pageheader.headers.find((h) => h.placeName === placeName);
  const imageUrl = header ? header.imageUrl : "default-image.jpg";
  const { user } = useAuthData();

  return (
    <>
      {user ? <NavBarLogedIn /> : <NavBarNoHover />}

      <div
        className={`bg-cover bg-center text-cardBg py-10 px-4 text-center min-h-screen flex items-center justify-center bg-opacity-50 sm:px-4`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h1 className="text-cardBg sm:text-h1sm md:text-h1md lg:text-h1lg font-avenir">
          Explore the wonder of parks in {placeName}
        </h1>
      </div>
    </>
  );
};
