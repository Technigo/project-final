import styled from "styled-components"
import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Layout = () => {
  return (
    <>
      <NavBar />
      <MainContent id="content">
        <Outlet />
      </MainContent>
      <Footer />
    </>
  )
}

export default Layout
