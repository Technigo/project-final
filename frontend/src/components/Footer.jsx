import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <div>
      {" "}
      <NavLink to="/about" className="text-white">
        <img src={shoppingCart} alt="Shopping cart" className="w-6" />
      </NavLink>
    </div>
  );
};
