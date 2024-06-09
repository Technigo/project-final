import { useProductsStore } from "../store/useProductsStore";
//import { useUserStore } from "../store/useUserStore";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Loading } from "../components/Loading";

export const ProductsPage = () => {
  const { productsData, fetchProducts, loadingProduct } = useProductsStore();
  //const { loggedIn } = useUserStore();
  const loggedIn = true // to be deleted
  const [categoryValue, setCategoryValue] = useState("category");
  const [sortValue, setSortValue] = useState("sort");
  const [filterValue, setFilterValue] = useState("filter");
  const [filteredProducts, setFilteredProducts] = useState([]);
  

  const handleSortChange = (e) => {
    setSortValue(e.target.value);
  };
  useEffect(() => {
    let sortedProducts = [...filteredProducts];

    if (sortValue === "top rated") {
      //sortedProducts.sort((a, b) => a.rating - b.rating);
    } else if (sortValue === "lowest price") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "highest price") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  }, [sortValue, filteredProducts]);

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryValue(e.target.value);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let newFilteredProducts = productsData.products;

    if (categoryValue !== "category" && categoryValue !== "all") {
      newFilteredProducts = newFilteredProducts.filter(
        (product) => product.category && product.category === categoryValue
      );
    }

    if (filterValue !== "filter" && filterValue !== "all") {
      newFilteredProducts = newFilteredProducts.filter(
        (product) => product.pros && product.pros.includes(filterValue)
      );
    }

    if (sortValue === "lowest price") {
      newFilteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "highest price") {
      newFilteredProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(newFilteredProducts);
  }, [categoryValue, filterValue, sortValue, productsData.products]);

  console.log(filteredProducts);

  return (
    <section className="bg-main-red h-full min-h-screen w-full pt-12 laptop:pt-28">
      <div className="font-heading flex flex-col items-center justify-between w-11/12 m-auto mb-8 tablet:w-9/12 desktop:flex-row desktop:flex-row">
        <h2 className="text-text-light text-2xl  tablet:text-3xl laptop:text-3xl text-center mb-6 desktop:mb-0">
        {loggedIn ? "Recommended Products" : "Products"}
        </h2>
        <div className="flex flex-col gap-2 tablet:gap-2 tablet:flex-row ">
          <form>
            <select
              name="category-filter"
              value={categoryValue}
              onChange={handleCategoryChange}
              className="appearance-none bg-button-varm-light px-4 py-1 rounded-xl text-sm text-center w-40 tablet:w-fit"
            >
              <option value="category" disabled hidden>
                Category
              </option>
              <option value="Skincare" className="bg-button-light">
                Skin care
              </option>
              <option value="Hair Care" className="bg-button-light">
                Hair care
              </option>
              <option value="Nail Care" className="bg-button-light">
                Nail care
              </option>
              <option value="Beard Care" className="bg-button-light">
                Beard care
              </option>
              <option value="all" className="bg-button-light">
                Show all
              </option>
            </select>
          </form>
          <form>
            <select
              name="Sort"
              value={sortValue}
              onChange={handleSortChange}
              className="appearance-none bg-button-varm-light px-4 py-1 rounded-xl text-sm text-center w-40 tablet:w-fit"
            >
              <option value="sort" disabled hidden>
                Sort
              </option>
              <option value="top rated" className="bg-button-light">
                Top rated
              </option>
              <option value="lowest price" className="bg-button-light">
                Lowest price
              </option>
              <option value="highest price" className="bg-button-light">
                Highest price
              </option>
            </select>
          </form>
          <form>
            <select
              name="Filter"
              value={filterValue}
              onChange={handleFilterChange}
              className="appearance-none bg-button-varm-light px-4 py-1 rounded-xl text-sm text-center w-40 tablet:w-fit"
            >
              <option value="filter" disabled hidden>
                Filter
              </option>
              <option value="organic" className="bg-button-light">
                Organic
              </option>
              <option value="crueltyfree" className="bg-button-light">
                {" "}
                Cruelty free
              </option>
              <option value="vegan" className="bg-button-light">
                Vegan
              </option>
              <option value="all" className="bg-button-light">
                Show all
              </option>
            </select>
          </form>
        </div>
      </div>
      {loadingProduct ? (
        <Loading />
      ) : (
        <ul className=" w-11/12 m-auto grid grid-cols-2 gap-6 tablet:grid-cols-4 tablet: w-9/12 laptop:grid-cols-5 desktop:grid-cols-6">
          {filteredProducts &&
            filteredProducts.map((item, index) => (
              <li key={index} className="w-full">
                <ProductCard data={item} />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
};
