import { Fb } from "../components/iconFolder/contactIcon/Fb";
import { Ig } from "../components/iconFolder/contactIcon/Ig";
import { Lin } from "../components/iconFolder/contactIcon/Lin";
import { Youtube } from "../components/iconFolder/contactIcon/Youtube";
import { useLocation } from "react-router-dom";

export const Contact = () => {
  const location = useLocation();

  let iconColor;
  if (location.pathname === "/sweden" || location.pathname === "/signup") {
    iconColor = "#FFFFFF";
  } else if (
    location.pathname === "/finland" ||
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/login" ||
    location.pathname === "/logged" ||
    location.pathname === "*"
  ) {
    iconColor = "#020209";
  }
  return (
    <div className="flex flex-col gap-y-2 ">
      <p className="text-textmd lg:text-textlg text-center">Contact</p>
      <div className="flex flex-row place-content-evenly gap-x-[25px]  ">
        <Fb fill={iconColor} />
        <Ig fill={iconColor} />
        <Lin fill={iconColor} />
        <Youtube fill={iconColor} />
      </div>
    </div>
  );
};
