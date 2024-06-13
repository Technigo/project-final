import { Navigate, Outlet } from "react-router-dom";

import { useUserStore } from "../stores/useUserStore";

export const AuthRoute = () => {
  const { accessToken } = useUserStore((state) => ({
    accessToken: state.accessToken,
  }));
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
