import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../common/ReusableComponents/Loader/Loader";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { Button } from "../../common/ReusableComponents/Button/Button";
import { Image } from "../../common/ReusableComponents/Image/Image";
import { Toggle } from "../../common/ReusableComponents/Toggle/Toggle";
import { DeliveryStatements } from "../Home/components/DeliveryStatements/DeliveryStatements";

import "./SingleProduct.css";
import { useBagStore } from "../../stores/useBagStore";

export const SingleProduct = () => {
  const { productId } = useParams(); //get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  // Destructuring addToCart from useCartStore
  const { addToCart } = useBagStore();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://cones-and-stones-ppnudpghiq-lz.a.run.app/products/${productId}`
        );

        const data = await response.json();
        if (data.success) {
          setTimeout(() => {
            setProduct(data.response);
            setError(null);
            setIsLoading(false);
          }, 500);
        } else {
          setError(data.error.message);
          setIsLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const selectSize = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize && product) {
      // addToCart({ ...product, size: selectedSize });
      addToCart(product, selectedSize);
    }
  };

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <div className="singleproduct-page">
      {isLoading && <Loader />}
      {product && (
        <div className="product-wrapper">
          <section className="image-container">
            <Image
              src={product.image_url}
              alt={product.name}
              className="product"
            />
          </section>
          <section className="product-info">
            <h3>{product.name}</h3>
            <h4>{product.price} SEK</h4>
            <p>{product.description}</p>
            <Toggle title="DETAILS">
              <p>{product.details}</p>
            </Toggle>
            <div className="size-button-wrapper">
              {product.stock.map((item, index) => (
                <Button
                  key={index}
                  label={item.size}
                  variant={
                    selectedSize === item.size ? "size-selected" : "size"
                  }
                  onClick={() => selectSize(item.size)}
                ></Button>
              ))}
            </div>
            <Button
              label={selectedSize ? "Add to cart" : "Select size"}
              variant="add-to-cart"
              disabled={!selectedSize}
              onClick={handleAddToCart}
            />
            <DeliveryStatements variant="white" />
          </section>
        </div>
      )}
    </div>
  );
};
