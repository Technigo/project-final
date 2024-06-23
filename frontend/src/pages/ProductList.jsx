import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import searchIcon from "../assets/icons/search-icon-blue.svg";
import { Breadcrumb } from "../components/Breadcrumb";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { Pagination } from "../components/Pagination";
import { ProductCard } from "../components/ProductCard";
import { SideDrawer } from "../components/SideDrawer";
import { useProductStore } from "../stores/useProductStore";
import { useUserStore } from "../stores/useUserStore";

export const ProductList = () => {
  // use this mapping to only fetch the specific states from zustand
  const { products, loading, errorProduct, getAllProducts, categories } =
    useProductStore((state) => ({
      products: state.products,
      loading: state.loading,
      errorProduct: state.error,
      getAllProducts: state.getAllProducts,
      categories: state.categories,
    }));

  const { errorUser, resetError } = useUserStore((state) => ({
    errorUser: state.error,
    resetError: state.resetError,
  }));
  const [searchParams, setSearchParams] = useSearchParams();

  // useState
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchTemplate, setSearchTemplate] = useState(
    searchParams.get("q") || "",
  );
  const [sortType, setSortType] = useState(searchParams.get("sort") || "");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(0);
  const [displayedProducts, setDisplayedProducts] = useState(products);

  //tag
  const tag = searchParams.get("tag");
  //category
  const category = searchParams.get("category");
  // Pagination
  const updateSearchParams = (paramName, value) => {
    // Add the new query param value to the queryString
    searchParams.set(paramName, value);
    // Enqueue navigation action that updates the queryString
    setSearchParams(searchParams);
  };

  // Pagination function
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  // useEffect 1: fetch products if null
  useEffect(() => {
    !products && getAllProducts();
    resetError();
  }, [
    getAllProducts,
    products,
    displayedProducts,
    itemsPerPage,
    currentPage,
    resetError,
  ]);

  // useEffect 2: set current page as 1 when category, sort by and search fields change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTemplate, sortType, category]);

  // useEffect 3: filter the products based on the user actions
  useEffect(() => {
    const filterProducts = () => {
      let finalProduct = products;
      if (tag) {
        finalProduct = finalProduct.filter((product) =>
          product.tags.split(", ").includes(tag),
        );
      }
      if (category) {
        finalProduct = finalProduct.filter(
          (product) => product.category === category,
        );
      }
      if (searchTemplate) {
        finalProduct = finalProduct.filter((product) =>
          product.templateName
            .toLowerCase()
            .includes(searchTemplate.toLowerCase()),
        );
      }
      if (sortType) {
        finalProduct = finalProduct.sort((a, b) => {
          switch (sortType) {
            case "price_asc":
              return a.price - b.price;
            case "price_desc":
              return b.price - a.price;
            case "name_asc":
              return a.templateName.localeCompare(b.templateName);
            case "name_desc":
              return b.templateName.localeCompare(a.templateName);
            default:
              return 0;
          }
        });
      }
      setDisplayedProducts(finalProduct);
      setTotalPages(Math.ceil(finalProduct.length / itemsPerPage));
    };
    filterProducts();
  }, [
    tag,
    category,
    sortType,
    searchTemplate,
    products,
    itemsPerPage,
    currentPage,
    setTotalPages,
  ]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <Breadcrumb />
      <div className="flex w-full justify-center lg:justify-start">
        <div className="mx-auto flex w-full flex-col items-center p-6 lg:max-w-screen-md lg:flex-initial lg:items-start">
          <h1 className="my-10 font-poppins font-bold lg:my-20">
            Shop our templates
          </h1>
          <div className="mb-10 flex flex-col items-center lg:w-full lg:flex-row lg:justify-between">
            <div className="flex gap-4 pb-6 lg:pb-0">
              <div className="border border-blue p-2">
                <select
                  className="w-[110px] font-montserrat text-sm text-blue"
                  value={category || ""}
                  onChange={(event) => {
                    updateSearchParams("category", event.target.value);
                  }}
                >
                  <option value="">Category</option>
                  {categories.map((category) => (
                    <option className="" key={category} value={category || ""}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="border border-blue p-2">
                <select
                  className="max-w-[110px] font-montserrat text-sm text-blue"
                  value={sortType}
                  onChange={(event) => {
                    updateSearchParams("sort", event.target.value);
                    setSortType(event.target.value);
                  }}
                >
                  <option value="">Sort by</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="name_asc">Alphabetically: A-Z</option>
                  <option value="name_desc">Alphabetically: Z-A</option>
                </select>
              </div>
            </div>

            <div className="w-full lg:flex lg:w-fit lg:self-end">
              <div className="flex flex-row border border-blue p-2">
                <img src={searchIcon} className="pr-4" alt="search icon" />
                <input
                  className="w-full font-montserrat text-sm"
                  type="text"
                  placeholder="Search"
                  value={searchTemplate}
                  onChange={(event) => {
                    setSearchTemplate(event.target.value);
                    updateSearchParams("q", event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {errorProduct ||
        (errorUser && <Error error={errorProduct || errorUser} />)}
      {!displayedProducts.length ? (
        <div className="flex items-center justify-center p-6">
          <div className="text-blue-500 pb-20 text-lg">
            <h2 className="mb-10 font-poppins font-bold">
              Opps! No template found.
            </h2>
            <p>Try adjusting your search or filter settings!</p>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-10 flex w-auto flex-col items-center px-8 lg:mb-20">
            <div className="grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 lg:w-full lg:max-w-screen-md lg:grid-cols-3">
              {displayedProducts
                .slice(
                  currentPage * itemsPerPage - itemsPerPage,
                  currentPage * itemsPerPage,
                )
                .map((product) => (
                  <ProductCard
                    key={product._id}
                    id={product._id}
                    templateImg={product.image}
                    tags={product.tags}
                    name={product.templateName}
                    price={product.price}
                    category={product.category}
                    Id={product._id}
                    setOpenDrawer={setOpenDrawer}
                  />
                ))}
            </div>
            <SideDrawer openRight={openDrawer} setOpenRight={setOpenDrawer} />
          </div>
          <Pagination
            totalItems={displayedProducts.length}
            itemsPerPage={itemsPerPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </main>
  );
};
