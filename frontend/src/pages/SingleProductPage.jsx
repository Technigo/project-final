import { useProductsStore } from "../store/useProductsStore";
import { useUserStore } from "../store/useUserStore";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { MdOutlineStar } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import SimilarProducts from "../components/SimilarProducts";
/* import { NotFound } from "./NotFound"; */
import { Footer } from "../components/Footer";
import { ReviewForm } from "../components/ReviewForm";
import { ShoppingCartPopup } from "../components/ShoppingCartPopup";
import { StickyButton } from "../components/StickyButton"
import swoopTop from "/swoops/swoop-similar-top.svg";
import swoopBottom from "/swoops/swoop-similar-bottom.svg";

export const SingleProductPage = () => {
  const { id } = useParams();
  const {
    fetchSingleProduct,
    loadingProduct,
    singleProduct,
    shoppingCart,
    setShoppingCart,
  } = useProductsStore();
  const { user, loggedIn } = useUserStore();
  // const loggedIn = true;
  const [quantity, setQuantity] = useState(1);
  const [allergies, setAllergies] = useState([]);

  const addToCart = "Add to Cart"; //productLangData.add-to-cart
  const product = singleProduct?.product || {};
  const userAllergy = allergies; //replace with userdata from store
  const [allergyAlert, setAllergyAlert] = useState([]);

  // Adding quantity of items to add to cart
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  // Removing quantity of items to add to cart
  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  // Adding product to the cart
  const handleAddToCart = () => {
    setShoppingCart(product, quantity);
  };

  useEffect(() => {
    if (user.user) {
      setAllergies(user.user.allergies);
    } else {
      setAllergies([""]);
    }
  }, [user]);

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  //Comparing user allergies with product allergies
  useEffect(() => {
    if (product && product.allergies) {
      const matchingAllergies = product.allergies.filter((allergy) =>
        userAllergy.includes(allergy)
      );
      setAllergyAlert(matchingAllergies);
    }
  }, [product, userAllergy]);

  return (
    <>
      <ShoppingCartPopup />
      {!loggedIn && <StickyButton />}
      <section className="bg-main-red pt-4 laptop:pt-12 w-full font-heading ">
        <NavLink to="/products">
          <button className="bg-button-varm-light text-text-dark w-8 h-8 rounded-full flex justify-center items-center ml-6 desktop:ml-12 mb-8">
            <IoIosArrowBack />
          </button>
        </NavLink>
        {loadingProduct ? (
          <Loading />
        ) : !product || !product.image || !product.image.url ? (
          <div className="w-6/12 bg-main-red m-auto mt-24 text-text-light text-xl text-center">
            <h2>No product found</h2>
            <Loading />
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="w-full tablet:w-11/12 tablet:m-auto tablet:flex pb-12 desktop:w-9/12 relative">
              <img
                src={product.image.url}
                alt={product.description}
                className="w-full tablet:w-7/12 desktop:w-5/12 object-cover aspect-square tablet:rounded-xl"
              />
              {allergyAlert.length > 0 && (
                <div className="absolute top-10 left-0 right-0 flex justify-center w-36  items-center bg-strong-red2 text-white py-2 px-4 rounded-r-xl">
                  Allergies: {allergyAlert.join(", ")}
                </div>
              )}

              <div className="w-9/12 m-auto tablet:m-0 py-6 text-text-light tablet:pl-8 desktop:pl-16">
                <h2 className="font-light text-lg tablet:text-xl mb-2">
                  {product.brand}
                </h2>
                <h3 className="text-xl tablet:text-3xl mb-8">
                  {product.title}
                </h3>
                <p className="mb-8 leading-loose">{product.description}</p>
                <div className="flex flex-col desktop:flex-row">
                <div>
                <div className="mb-12 flex">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </div>
                <h3 className="text-3xl mb-8">{product.price} €</h3>
                <div className="flex gap-6">
                  <div className="flex">
                    <button
                      onClick={handleDecrement}
                      className="bg-text-light text-text-dark w-5 rounded-l-xl"
                    >
                      -
                    </button>
                    <span className="bg-text-light text-text-dark w-12 flex items-center justify-center text-sm">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrement}
                      className="bg-text-light text-text-dark w-5 rounded-r-xl"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="w-24 h-6 text-xs bg-strong-yellow p-1 rounded-full text-text-dark hover:bg-main-yellow"
                  >
                    {addToCart}
                  </button>
                </div>
                {product.pros.length > 0 && (
  <div className="flex my-8 gap-2">
    {product.pros.includes("crueltyfree") && (
      // Content for cruelty-free products
     <img src="/crueltyfree.svg" alt="cruelty free" title="Cruelty free" className="w-14 h-14" />
      
    )}
    {product.pros.includes("organic") && (
      // Content for organic products
      <img src="/organic.svg" alt="organic" title="Organic" className="w-14 h-14" />
    )}
     {product.pros.includes("vegan") && (
      // Content for organic products
      <img src="/vegan.svg" alt="vegan" title="Vegan" className="w-14 h-14" />
    )}
  </div>
)}</div>
<div className="tablet:hidden desktop:flex text-text-dark flex-col ml-20 gap-10">
{!loggedIn && product.skin.length > 0 && (
              <div className="w-11/12 m-auto desktop:w-9/12 relative">
                <h4 className="text-text-light font-bold">Recommended for skintypes: </h4>
                <ul className="list-none flex flex-col laptop:flex-row flex-wrap justify-evenly gap-4">
                  {product.skin.map((item, index) => (
                    <li
                      key={index}
                      className="bg-button-varm-light w-36 text-center p-2 rounded-xl"
                    >
                      {" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
               {!loggedIn && product.hair.moisture.length > 0 &&  (
              <div className= "w-11/12 m-auto laptop:w-full relative flex flex-col gap-2">
              <h4 className="text-text-light font-bold">Recommended for hair moisture level: </h4>
              <ul className="list-none flex flex-col laptop:flex-row flex-wrap gap-4">
              {product.hair.moisture.map((item, index) => (
          <li key={index} className="bg-button-varm-light w-20 text-center  p-2 rounded-xl">
            {item}
          </li>
        ))}
              </ul>
            </div>
            )}
                  {!loggedIn && product.hair.shape.length > 0 &&  (
              <div className="w-11/12 m-auto laptop:w-full relative flex flex-col gap-2">
              <h4 className="text-text-light font-bold">Recommended for hairshape: </h4>
              <ul className="list-none flex flex-col laptop:flex-row flex-wrap gap-4">
              {product.hair.shape.map((item, index) => (
          <li key={index} className="bg-button-varm-light w-24 p-2 text-center rounded-xl">
            {item}
          </li>
        ))}
              </ul>
            </div>
            )}

            {!loggedIn && product.allergies.length > 0 &&(
              <div className="w-11/12 m-auto desktop:w-full justify-evenly relative flex flex-col gap-2">
              <h4 className="text-text-light font-bold">Allergens: </h4>
              <ul className="list-none flex flex-col laptop:flex-row flex-wrap gap-4 items-center">
              {product.allergies.map((item, index) => (
          <li key={index} className="bg-button-varm-light w-fit p-2 text-center rounded-xl">
            {item}
          </li>
        ))
            }
              </ul>
            </div>
            )
             }
</div>
</div>
              </div>
            </div>
            {/* Different position of the same content for tablet */}
            <div className="hidden tablet:block desktop:hidden">
{!loggedIn && product.skin.length > 0 && (
              <div className="w-11/12 m-auto tablet:flex pb-12 desktop:w-9/12 relative">
                <h4 className="text-text-light font-bold">Recommended for skintype: </h4>
                <ul className="list-none flex flex-col tablet:flex-row flex-wrap justify-evenly gap-4">
                  {product.skin.map((item, index) => (
                    <li
                      key={index}
                      className="ml-4 bg-button-varm-light w-36 p-2 rounded-xl"
                    >
                      {" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {!loggedIn && product.hair.moisture.length > 0 &&  (
              <div className="w-11/12 m-auto tablet:flex pb-12 desktop:w-9/12 relative">
              <h4 className="text-text-light font-bold">Recommended for hairtype: </h4>
              <ul className="list-none flex flex-col tablet:flex-row flex-wrap justify-evenly gap-4">
              {product.hair.moisture.map((item, index) => (
          <li key={index} className="ml-4 bg-button-varm-light w-36 p-2 rounded-xl">
            {item}
          </li>
        ))}
              </ul>
            </div>
            )}
                  {!loggedIn && product.hair.shape.length > 0 &&  (
              <div className="w-11/12 m-auto tablet:flex pb-12 desktop:w-9/12 relative">
              <h4 className="text-text-light font-bold">Recommended for hairshape: </h4>
              <ul className="list-none flex flex-col tablet:flex-row flex-wrap justify-evenly gap-4">
              {product.hair.shape.map((item, index) => (
          <li key={index} className="ml-4 bg-button-varm-light w-36 p-2 rounded-xl">
            {item}
          </li>
        ))}
              </ul>
            </div>
            )}

            {!loggedIn && product.allergies.length > 0 &&(
              <div className="w-11/12 m-auto tablet:flex pb-12 desktop:w-9/12 relative">
              <h4 className="text-text-light font-bold">Allergens: </h4>
              <ul className="list-none flex flex-col tablet:flex-row flex-wrap justify-evenly items-center gap-4">
              {product.allergies.map((item, index) => (
          <li key={index} className="ml-4 bg-button-varm-light w-36 p-2 justify-self-center rounded-xl">
            {item}
          </li>
        ))
            }
              </ul>
            </div>
            )
             }
</div>
          </div>
        )}
      </section>
      <section>
        <SimilarProducts
          subcategory={product.subcategory}
          currentProductId={product._id}
        />
      </section>
      <ReviewForm />

      {/* add the X of the bg-main-X to the aboveColor to make the Footer match*/}
      <Footer aboveColor={"red"} />
    </>
  );
};
