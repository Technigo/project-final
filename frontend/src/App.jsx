import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { AuthProvider } from "./contexts/AuthContext";
import { FavParProvider } from "./contexts/FavParkContext";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <FavParProvider>
          <BrowserRouter>
            <Routes>{routes}</Routes>
          </BrowserRouter>
        </FavParProvider>
      </AuthProvider>
    </>
  );
};