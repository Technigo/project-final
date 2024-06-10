import { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { Breadcrumb } from "../components/Breadcrumb";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTemplate, setSearchTemplate] = useState("");
  const [sortType, setSortType] = useState("");

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products.length) {
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
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTemplate}
          onChange={(event) => setSearchTemplate(event.target.value)}
        />
        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="">Sort by</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="name_asc">Alphabetically: A-Z</option>
          <option value="name_desc">Alphabetically: Z-A</option>
        </select>
      </div>

      <div className="flex w-auto flex-col items-center px-8">
        <div className="grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 lg:w-full lg:max-w-screen-md lg:grid-cols-3">
          {sortedProducts.map((product) => (
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
