import { useParams } from "react-router-dom";

export const CategoryPage = () => {
  const { category } = useParams();

  // Fetch or filter products based on the category
  // For simplicity, let's use a static array
  const allCategories = [
    { name: "Artistic Product 1", category: "artistic" },
    { name: "Beauty Product 1", category: "beauty" },
    { name: "Business Product 1", category: "business" },
    { name: "Color Product 1", category: "color" },
    { name: "Fashion Product 1", category: "fashion" },
    { name: "Health Product 1", category: "health" },
    { name: "Restaurant Product 1", category: "restaurant" },
    { name: "Sports Product 1", category: "sports" },
    { name: "Tech Product 1", category: "tech" },
    { name: "Travel Product 1", category: "travel" },
  ];

  const filteredCategories = allCategories.filter(
    (product) => product.category === category,
  );

  return (
    <div>
      <h1>Products in {category}</h1>
      <ul>
        {filteredCategories.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
