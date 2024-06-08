import styled from "styled-components"
import { NavLink, useLocation } from "react-router-dom"
import GlobalStyles from "../GlobalStyles"

const BreadcrumbsContainer = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  ul {
    list-style: none;
    display: flex;
    text-decoration: none;
  }

  ul li {
    margin-right: 8px;
  }

  ul li::after {
    content: "/";
    margin-left: 8px;
    color: #ffffff;
  }

  ul li:last-child::after {
    content: "";
  }

  ul li a {
    text-decoration: none;
    color: #ffffff;
    font-family: var(--font-family-text);
  }

  ul li a.active {
    font-weight: bold;
    color: var(--menu-active-color);
  }
`
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

//Filter path name for breadcrumbs
export const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x)

  //If statement to not render breadcrumbs on start page when path name is 0
  if (pathnames.length === 0) {
    return null
  }

  return (
    <>
      <GlobalStyles />
      <BreadcrumbsContainer>
        <ul>
          <li>
            <NavLink
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </NavLink>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`
            return (
              <li key={to}>
                <NavLink
                  to={to}
                  className={location.pathname === to ? "active" : ""}
                >
                  {capitalizeFirstLetter(value)}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </BreadcrumbsContainer>
    </>
  )
}
