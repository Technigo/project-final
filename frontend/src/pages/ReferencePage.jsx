import { ToHomepageBtn } from "../components/ToHomepageBtn"
import styled from "styled-components"

export const ReferencePage = () => {
  return (
    <>
      <StyledReferencePage>
        <ToHomepageBtn />
        <h4>Licenses</h4>
        <ul>
          {" "}
          <li>
            <span>Museum icon by</span>
            <a target="_blank" href="https://icons8.com">
              Icons 8
            </a>
          </li>
          <li>All other icons from React Icons</li>
          <li>
            Images from <a href="https://www.pexels.com/">Pexels</a> and{" "}
            <a href="https://unsplash.com/">Unsplash</a>
          </li>
        </ul>
      </StyledReferencePage>
    </>
  )
}

const StyledReferencePage = styled.div`
  padding: 20px;
  text-align: center;

  h4 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
  }

  li {
    font-size: 18px;
    margin-bottom: 10px;
  }

  span {
    font-weight: bold;
    margin-right: 5px;
  }

  a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: #0056b3;
  }
`
