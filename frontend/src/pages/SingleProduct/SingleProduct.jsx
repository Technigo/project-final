import { Image } from "../../common/ReusableComponents/Image/Image";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import { DeliveryStatements } from "../Home/components/DeliveryStatements/DeliveryStatements";
import { Button } from "../../common/ReusableComponents/Button/Button";

export const SingleProduct = () => {
  const { productId } = useParams(); //get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://cones-and-stones-ppnudpghiq-lz.a.run.app/products/${productId}`
        );

        const data = await response.json();
        if (data.success) {
          setProduct(data.response);
          setError(null);
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        } else {
          setError(data.error.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <div className="singleproduct-page">
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>

      {product && (
        <div className="product-wrapper">
          <section className="image-container">
            <Image
              src={product.image_url}
              alt="product-image"
              className="product"
            />
          </section>
          <section className="product-info">
            <h3>{product.name}</h3>
            <h4>{product.price} SEK</h4>
            <p>{product.description}</p>
            <p>{product.details}</p>
            <div className="size-button-wrapper">
              {product.stock.map((item, index) => (
                <Button key={index} label={item.size} variant="size"></Button>
              ))}
            </div>
            <Button label="Add to cart" variant="add-to-cart" />
            <DeliveryStatements variant="white" />
          </section>
        </div>
      )}
    </div>
  );
};
