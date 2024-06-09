import { useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { Loading } from "../components/Loading";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
import { useProductsStore } from "../store/useProductsStore";

export const ProductsPage = () => {
  const { productsData, fetchProducts, loadingProduct } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(productsData);
  console.log("loading: ", loadingProduct);

  return (
    <>
      <section className="bg-main-red h-full min-h-screen w-full pt-12 laptop:pt-28">
        <div className="font-heading flex flex-col items-center justify-between my-4 w-11/12 m-auto tablet:w-9/12 tablet:flex-row desktop:flex-row">
          <h2 className="text-text-light text-2xl mb-6 tablet:text-3xl tablet:mb-0 laptop:text-3xl ">
            Products
          </h2>
          <div className="flex gap-4 tablet:gap-2">
            <form>
              <select
                name="Sort"
                className="appearance-none px-4 py-1 rounded-xl w-fit max-w-fit text-sm text-center"
              >
                <option value="sort" selected disabled hidden>
                  Sort
                </option>
                <option value="newest">Newest</option>
                <option value="top rated">Top rated</option>
                <option value="lowest price">Lowest price</option>
                <option value="highest price">Highest price</option>
              </select>
            </form>
            <form>
              <select
                name="Filter"
                className="appearance-none px-4 py-1 rounded-xl w-fit max-w-fit text-sm text-center"
              >
                <option value="filter" selected disabled hidden>
                  Filter
                </option>
                <option value="category" className="m-4">
                  Category
                </option>
                <option value="organic">Organic</option>
                <option value="cruelty free">Cruelty free</option>
                <option value="vegan">Vegan</option>
              </select>
            </form>
          </div>
        </div>
        {loadingProduct ? (
          <Loading />
        ) : (
          <ul className=" w-11/12 m-auto grid grid-cols-2 gap-6 tablet:grid-cols-4 tablet: w-9/12 laptop:grid-cols-5 desktop:grid-cols-6">
            {productsData.products &&
              productsData.products.map((item, index) => (
                <li key={index} className="w-full">
                  <ProductCard data={item} />
                </li>
              ))}
          </ul>
        )}
      </section>
      {/* add the X of the bg-main-X to the aboveColor to make the Footer match*/}
      <Footer aboveColor={"red"} />
    </>

  );
};
