import { CategoryIcons } from "../../components/CategoryIcons/CategoryIcons";
import { Header } from "../../components/Header/Header";
import "./AllProducts.css";

export const AllProducts = () => {
  return (
    <div className="allproducts-page">
      <Header />
      <CategoryIcons />
      <h2>All products</h2>
    </div>
  );
};
