import { Image } from "../../common/ReusableComponents/Image";
import "./SingleProduct.css";

export const SingleProduct = () => {
  return (
    <div className="singleproduct-page">
      <div className="image-container">
        <Image alt="product-image" />
      </div>
      <div className="product-info">
        <h2>Product name</h2>
        <h4>Price</h4>
        <p>Description</p>
        <p>Details</p>
        <div className="size-buttons">
          <button>80/86</button>
          <button>80/86</button>
          <button>80/86</button>
          <button>80/86</button>
        </div>
        <button className="add-to-cart-button">Add to cart</button>
        <div className="delivery-icons">
          <img alt="Free shipping" />
          <img alt="Fast delivery" />
          <img alt="Pick up in store" />
        </div>
      </div>
    </div>
  );
};
