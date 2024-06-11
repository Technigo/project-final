import { Navigate } from "react-router-dom"
import { useUserStore } from "../store/useStore"

export const ProtectedRoute = ({children}) => {
  const authToken = useUserStore((state) => state.authToken)
  if (!authToken) {
    return <Navigate to="/Signup" />
  }
  return children
}