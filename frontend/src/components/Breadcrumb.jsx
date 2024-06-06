import { Link, useLocation } from "react-router-dom";
import breadcrumbIcon from "../assets/icon-breadcrumb.svg";

export const Breadcrumb = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="mx-6 my-4 flex w-full flex-wrap items-center font-montserrat font-bold">
        <li className="flex cursor-pointer text-sm text-black">
          <Link to="/">HOME</Link>
          {pathnames.length > 0 && (
            <img src={breadcrumbIcon} alt="breadcrumb icon" className="mx-4" />
          )}
        </li>

        {pathnames.map((name, position) => {
          const goTo = `/${pathnames.slice(0, position + 1).join("/")}`;
          const positionIsLast = position === pathnames.length - 1;
          const pathName = name.toUpperCase();

          return (
            <li key={name} className="flex items-center text-sm text-blue">
              {positionIsLast ? (
                <span>{pathName}</span>
              ) : (
                <>
                  <Link to={goTo} className="cursor-pointer">
                    {pathName}
                  </Link>
                  <img
                    src={breadcrumbIcon}
                    alt="breadcrumb icon"
                    className="mx-4"
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
