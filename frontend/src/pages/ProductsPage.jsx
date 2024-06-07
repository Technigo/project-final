import { useProductsStore } from "../store/useProductsStore";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Loading } from "../components/Loading";


export const ProductsPage = () => {
  const { productsData, fetchProducts, loadingProduct } = useProductsStore();
  const [ sortValue, setSortValue ] = useState('sort');
  const [ filterValue, setFilterValue ] = useState('filter');
  const [ filteredProducts, setFilteredProducts ] = useState([]);

  const handleSortChange = (e) => {
    setSortValue(e.target.value)
  }
  useEffect(() => {
    let sortedProducts = [...filteredProducts];
  
    if (sortValue === 'top rated') {
      //sortedProducts.sort((a, b) => a.rating - b.rating);
    } else if (sortValue === 'lowest price') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'highest price') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
  
    setFilteredProducts(sortedProducts);
  }, [sortValue, filteredProducts]);

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let newFilteredProducts = productsData.products;

    if (filterValue !== 'filter' && filterValue !== 'all') {
      newFilteredProducts = productsData.products.filter(product =>
        product.pros && product.pros.includes(filterValue)
      );
    }

    setFilteredProducts(newFilteredProducts);
  }, [filterValue, productsData.products]);

  console.log(productsData);
  console.log("loading: ", loadingProduct);
console.log ("filtered", filteredProducts)

  return (
    <section className="bg-main-red h-full min-h-screen w-full pt-12 laptop:pt-28">
      <div className="font-heading flex flex-col items-center justify-between my-4 w-11/12 m-auto tablet:w-9/12 tablet:flex-row desktop:flex-row">
        <h2 className="text-text-light text-2xl mb-6 tablet:text-3xl tablet:mb-0 laptop:text-3xl ">
          Products
        </h2>
        <div className="flex gap-4 tablet:gap-2">
        <form>
        <select
          name="Sort"
          value={sortValue}
          onChange={handleSortChange}
          className="appearance-none px-4 py-1 rounded-xl w-fit max-w-fit text-sm text-center"
        >
          <option value="sort" disabled hidden>
            Sort
          </option>
          <option value="top rated">Top rated</option>
          <option value="lowest price">Lowest price</option>
          <option value="highest price">Highest price</option>
        </select>
      </form>
      <form>
        <select
          name="Filter"
          value={filterValue}
          onChange={handleFilterChange}
          className="appearance-none px-4 py-1 rounded-xl w-fit max-w-fit text-sm text-center"
        >
          <option value="filter" disabled hidden>
            Filter
          </option>
          <option value="category">Category</option>
          <option value="organic">Organic</option>
          <option value="crueltyfree">Cruelty free</option>
          <option value="vegan">Vegan</option> 
          <option value="all">Show all</option>
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
