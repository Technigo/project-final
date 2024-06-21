import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import breadcrumbIcon from "../assets/icons/icon-breadcrumb.svg";

export const Breadcrumb = ({ lastBreadcrumbOverride, notFound }) => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex w-full flex-wrap items-center px-6 py-4 font-montserrat font-bold">
        <li className="flex text-sm text-black">
          <Link to="/" className="cursor-pointer">
            HOME
          </Link>
          {pathnames.length > 0 && (
            <img src={breadcrumbIcon} alt="breadcrumb icon" className="mx-4" />
          )}
        </li>
        {notFound && (
          <li className="flex items-center text-sm text-blue">
            <span>NOT FOUND</span>
          </li>
        )}
        {!notFound &&
          pathnames.map((name, position) => {
            const goTo = `/${pathnames.slice(0, position + 1).join("/")}`;
            const positionIsLast = position === pathnames.length - 1;
            const displayPathName = name.toUpperCase().replace(/-/g, " ");
            return (
              <li key={name} className="flex items-center text-sm text-blue">
                {positionIsLast ? (
                  <span>{lastBreadcrumbOverride || displayPathName}</span>
                ) : (
                  <>
                    <Link to={goTo} className="cursor-pointer">
                      {displayPathName}
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

Breadcrumb.propTypes = {
  lastBreadcrumbOverride: PropTypes.string,
  notFound: PropTypes.bool,
};
