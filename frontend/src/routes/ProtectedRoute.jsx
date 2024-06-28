import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <>{element}</>;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
