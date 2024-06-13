import { Navigate, Outlet } from "react-router-dom";

import { useUserStore } from "../stores/useUserStore";

export const ProtectedRoute = () => {
  const accessToken = useUserStore((state) => state.accessToken);
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
