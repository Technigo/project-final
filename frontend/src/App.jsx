import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";

export const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <AppRoutes />
        </div>
      </Router>
    </CartProvider>
  );
};
