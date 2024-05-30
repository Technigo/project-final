import { CategoryIcons } from "../../components/CategoryIcons/CategoryIcons";
import { Header } from "../../sections/Header/Header";
import "./AllProducts.css";

export const AllProducts = () => {
  return (
    <div className="allproducts-page">
      <CategoryIcons />
      <h2>All products</h2>
    </div>
  );
};
