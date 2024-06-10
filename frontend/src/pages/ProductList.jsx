import { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { Breadcrumb } from "../components/Breadcrumb";
import searchIcon from "../assets/search-icon-blue.svg";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTemplate, setSearchTemplate] = useState("");
  const [sortType, setSortType] = useState("");
  const [sortCategory, setSortCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network error");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ].sort();
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error.toString());
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.templateName.toLowerCase().includes(searchTemplate.toLowerCase()),
  );

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!finalProducts.length) {
    return <div>No products found.</div>;
  }

  return (
    <>
      <Breadcrumb />
      <div className="flex w-full justify-center lg:justify-start">
        <div className="mx-auto flex w-full flex-col items-center lg:max-w-screen-md lg:flex-initial lg:items-start">
          <h1 className="my-10 font-poppins font-bold lg:my-20">
            Shop our templates
          </h1>

          <div className="mb-10 flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-x-20">
            <div className="flex gap-4 pb-6 lg:pb-0 lg:pr-20">
              <div className="border border-blue p-2">
                <select
                  className="font-montserrat text-sm text-blue"
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
                  className="font-montserrat text-sm text-blue"
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

            <div className="w-full">
              <div className="flex flex-row border border-blue p-2">
                <img src={searchIcon} className="pr-4" alt="search icon" />
                <input
                  className="font-montserrat text-sm"
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

      <div className="flex w-auto flex-col items-center px-8">
        <div className="grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 lg:w-full lg:max-w-screen-md lg:grid-cols-3">
          {finalProducts.map((product) => (
            <ProductCard
              key={product._id}
              templateImg={product.image}
              tags={product.tags}
              name={product.templateName}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};
