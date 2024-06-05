import styled from "styled-components"
import { NavLink, useLocation } from "react-router-dom"
//Use of useLocation hook to get the current location to see where user is

const BreadcrumbsContainer = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  ul {
    list-style: none;
    display: flex;
  }

  ul li {
    margin-right: 8px;
  }

  ul li::after {
    content: "/";
    margin-left: 8px;
  }

  ul li:last-child::after {
    content: "";
  }

  ul li a.active {
    font-weight: bold;
    color: red;
  }
`

//Filter path name for breadcrumbs
export const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x)

  //Is statement to not render breadcrumbs on start page when path name is 0
  if (pathnames.length === 0) {
    return null
  }

  return (
    <BreadcrumbsContainer>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
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
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {value}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </BreadcrumbsContainer>
  )
}
