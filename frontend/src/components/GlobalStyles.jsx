import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding 80px 60px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: var(--font-family-main)
}

:root {
  --text-color: #FFE4C4;
  --headline-color: #FFFFFF;
  --background-color: #000000;
  --textbox-background: #161822;
  --button-color: #CF4B14;
  --menu-active-color: #CF4B14;
  --font-family-main: "Roboto mono", "Space mono", monospace;

  --font-size-h1-desktop: 64px:
  --font-size-h2-desktop: 26px;
  --font-size-h3-desktop: 24px;
  --font-size-small: 16px;
  --font-size-medium: 18px;
  --font-size-large: 20px;

  --font-size-h1-mob: 48px;
  --font-size-h2-mob: 20px;
  --font-size-h3-mob: 18px;
  --font-size-text-mob: 16px:
}
`

export default GlobalStyles
