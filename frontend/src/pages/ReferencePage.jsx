import { ToHomepageBtn } from "../components/ToHomepageBtn"
import StyledAboutPage from "../components/styled/AboutPage.styled"

export const ReferencePage = () => {
  return (
    <StyledAboutPage>
      <ToHomepageBtn />
      <h4>References</h4>
      <ul>
        {" "}
        <li>
          <a target="_blank" href="https://icons8.com/icon/65186/museum">
            Museum icon by
          </a>
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
    </StyledAboutPage>
  )
}
