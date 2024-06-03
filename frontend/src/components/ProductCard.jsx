export const ProductCard = ({ data }) => {
  const productData = data;
  //const productLangData = langData; //Should probably be products-list-page

  //Change variables to accept incoming data from backend.
  const image = productData.image.url;
  const productName = productData.title;
  const price = `€${productData.price}`;

  // Change variable to accept data from translation file.
  const addToCart = "Add to Cart"; //productLangData.add-to-cart

  return (
    <div className="bg-strong-red m-auto w-2/3 rounded-xl">
      <img className="w-100% rounded-t-xl" src={image} alt="" />
      <div className="m-2 flex flex-col items-center text-white">
        <h3 className="font-heading">{productName}</h3>
        <p className="font-body my-2">{price}</p>
        <button className="w-28 bg-button-light my-2 rounded-full text-text-dark">
          {addToCart}
        </button>
      </div>
    </div>
  );
};
