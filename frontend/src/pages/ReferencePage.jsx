import styled from "styled-components"
import StyledLoginPage from "../components/styled/LoginPage.styled.jsx"

export const ReferencePage = () => {
  return (
    <>
      <StyledReferencePage>
        <Background />

        <StyledLoginPage>
          <h4>Licenses</h4>
          <ul>
            {" "}
            <li>
              <span>Logos from</span>
              <a target="_blank" href="https://logo.com/">
                LOGO.com{" "}
              </a>
            </li>
            <li>All other icons from React Icons</li>
            <li>
              Images from <a href="https://www.pexels.com/">Pexels</a> and{" "}
              <a href="https://unsplash.com/">Unsplash</a>
            </li>
          </ul>
        </StyledLoginPage>
      </StyledReferencePage>
    </>
  )
}

const StyledReferencePage = styled.div`
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
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #dee0e2;
  z-index: -999;
`
