import { Image } from "../../common/ReusableComponents/Image";
import { useEffect, useState } from "react";
import "./SingleProduct.css";

export const SingleProduct = (product) => {
  const { productId } = useParams(); //get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = () => {
    setIsLoading(true); // Set loading to true before fetch starts

    fetch(`https://cones-and-stones-ppnudpghiq-lz.a.run.app/products/${_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load product");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data
        if (data.success && data.response) {
          setProduct(data.response);
          setError(null); // Clear error if fetch is successful
        } else {
          throw new Error("Fetched data is not in the expected format");
        }

        // Introduce a delay before setting loading to false
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      })
      .catch((error) => {
        console.error("Fetch error:", error); // Log the error
        setError(error.message); // Set error message in state
        setIsLoading(false); // Set loading to false after fetch completes
      });
  };

  return (
    <div className="singleproduct-page">
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>
      <div className="image-container">
        <Image src={product.image_url} alt="product-image" />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <h4>{product.price}</h4>
        <p>{product.description}</p>
        <p>{product.details}</p>
        <div className="size-buttons">
          {product.stock.map((item, index) => (
            <button key={index}>{item.size}</button>
          ))}
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
