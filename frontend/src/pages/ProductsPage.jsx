import { useProductsStore } from "../store/useProductsStore";
import { useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { Loading } from "../components/Loading";

export const ProductsPage = () => {
  const { productsData, fetchProducts, loadingProduct } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(productsData);
  console.log("loading: ", loadingProduct);

  return (
    <section className="bg-main-red h-full">
      {loadingProduct ? (
        <Loading />
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
