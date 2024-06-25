import { Route} from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Login } from "../pages/LoginPage";
import { Signup } from "../pages/SignupPage";
import { LoggedPage } from "../pages/LoggedPage";
import { FinlandPage } from "../pages/FinlandPage";
import { SwedenPage } from "../pages/SwedenPage";
import { AboutPage } from "../pages/AboutPage";
import { ParkInfoPage } from "../pages/ParkInfoPage";
import { NotFoundPage } from "../pages/NotFoundPage";


export const routes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/finland" element={<FinlandPage />} />
    <Route path="/sweden" element={<SwedenPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/logged" element={<LoggedPage />} />
    <Route path="/:nation/:parkName" element={<ParkInfoPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </>
);