import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

import { LogoutButton } from "../components/LogoutButton"
import { ToHomepageBtn } from "../components/ToHomepageBtn"

//features that should be displayed here: liked museums, written comments, purchased tickets...
//Authorize with access token from /user-page

export const UserPage = () => {
  const { authState, logout } = useContext(AuthContext)
  const { isAuthenticated, accessToken } = authState

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserPage = async () => {
      try {
        const response = await fetch("http://localhost:3000/user-page", {
          headers: {
            Authorization: accessToken,
          },
        })
        if (!response.ok) {
          throw new Error("Failed to fetch user page")
        }
        setLoading(false)
      } catch (error) {
        console.error(error)
        logout()
      }
    }

    if (isAuthenticated) {
      fetchUserPage()
    } else {
      setLoading(false)
    }
  }, [isAuthenticated, accessToken, logout])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return (
      <div>
        <p>You are not authorized to view this page. Please log in.</p>
        <ToHomepageBtn />
        <Link to={"/login"}>Log in </Link> or
        <Link to={"/register"}> sign up</Link>
      </div>
    )
  }

  return (
    <div>
      <ToHomepageBtn />
      <p>Liked museums</p>
      <p>Posted reviews</p>
      <p>Purchased tickets</p>

      <LogoutButton />
    </div>
  )
}
