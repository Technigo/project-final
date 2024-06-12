import { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { Breadcrumb } from "../components/Breadcrumb";
import { Loading } from "../components/Loading";
import { Pagination } from "../components/Pagination";
import searchIcon from "../assets/search-icon-blue.svg";
import { useProductStore } from "../stores/useProductStore";
import { useSearchParams } from "react-router-dom";

export const ProductList = () => {
  // use this mapping to only fetch the specific states from zustand
  const { products, loading, error, getAllProducts, categories } =
    useProductStore((state) => ({
      products: state.products,
      loading: state.loading,
      error: state.error,
      getAllProducts: state.getAllProducts,
      categories: state.categories,
    }));

  // useState
  const [searchTemplate, setSearchTemplate] = useState("");
  const [sortType, setSortType] = useState("");
  const [sortCategory, setSortCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  useEffect(() => {
    // Search feature
    const filteredProducts = products.filter((product) =>
      product.templateName.toLowerCase().includes(searchTemplate.toLowerCase()),
    );

    // Sorting
    const sortedProducts = filteredProducts.sort((a, b) => {
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

    // Filter by category
    const finalProducts = sortCategory
      ? sortedProducts.filter((product) => product.category === sortCategory)
      : sortedProducts;

    // Pagination
    setTotalPages(Math.ceil(finalProducts.length / itemsPerPage));
  }, [products, searchTemplate, sortType, sortCategory, itemsPerPage]);

  const filteredProducts = products.filter((product) => {
    if (!searchParams.get("tag") && !searchParams.get("category")) return true;

    if (searchParams.get("tag")) {
      return (
        product.tags.split(", ").includes(searchParams.get("tag")) &&
        product.templateName
          .toLowerCase()
          .includes(searchTemplate.toLowerCase())
      );
    } else if (searchParams.get("category")) {
      return product.category === searchParams.get("category");
    }
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
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

  const finalProducts = sortCategory
    ? sortedProducts.filter((product) => product.category === sortCategory)
    : sortedProducts;

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = finalProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  // tag
  const handleTagClick = (tag) => {
    setSearchParams({ tag: tag });
  };

  // category
  const handleCategoryClick = (category) => {
    setSearchParams({ category: category });
  };

  // Pagination function
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTemplate, sortType, sortCategory]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Breadcrumb />
      <div className="flex w-full justify-center lg:justify-start">
        <div className="mx-auto flex w-full flex-col items-center lg:max-w-screen-md lg:flex-initial lg:items-start">
          <h1 className="my-10 font-poppins font-bold lg:my-20">
            Shop our templates
          </h1>

          <div className="mb-10 flex flex-col items-center lg:w-full lg:flex-row lg:justify-between">
            <div className="flex gap-4 pb-6 lg:pb-0">
              <div className="border border-blue p-2">
                <select
                  className="max-w-[140px] font-montserrat text-sm text-blue"
                  value={sortCategory}
                  onChange={(event) => setSortCategory(event.target.value)}
                >
                  <option value="">Category</option>
                  {categories.map((category) => (
                    <option className="" key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="border border-blue p-2">
                <select
                  className="max-w-[140px] font-montserrat text-sm text-blue"
                  value={sortType}
                  onChange={(event) => setSortType(event.target.value)}
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
                  onChange={(event) => setSearchTemplate(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {!finalProducts.length ? (
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
              {currentProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  templateImg={product.image}
                  tags={product.tags}
                  name={product.templateName}
                  price={product.price}
                  category={product.category}
                  Id={product._id}
                  onTagClick={handleTagClick}
                  onCategoryClick={handleCategoryClick}
                />
              ))}
            </div>
          </div>
          <Pagination
            totalItems={finalProducts.length}
            itemsPerPage={itemsPerPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
};
