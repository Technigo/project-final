import { useProductsStore } from "../store/useProductsStore";
import { useEffect } from "react";
import { ProductCard } from "../components/ProductCard";

export const ProductsPage = () => {
  const { productsData, fetchProducts, loadingProduct } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(productsData);
  console.log("loading: ", loadingProduct);

  return (
    <section className="bg-main-red">
      {loadingProduct ? (
        <p>Loading.. </p>
      ) : (
        <ul>
          {productsData.products &&
            productsData.products.map((item, index) => (
              <li key={index}>
                <ProductCard data={item} />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
};
