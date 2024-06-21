//This Review Form is not implemented yet. It is here for future use.
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Loading } from "../components/Loading";
import { NotFound } from "../pages/NotFound";
//User needs to be logged in to able to access the review form.
import { useProductsStore } from "../store/useProductsStore";
import StarRating from "./StarRating";

export const ReviewForm = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [selectedStars, setSelectedStars] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [charCheck, setCharCheck] = useState(true);
  const { fetchSingleProduct, loadingProduct, singleProduct } =
    useProductsStore();
  const product = singleProduct.product;

  useEffect(() => {
    fetchSingleProduct(id);
  }, []);

  if (!product || !product.image || !product.image.url) {
    return (
      <div>
        <NotFound reason="product to review" />
      </div>
    );
  }

  const handleSend = (event) => {
    event.preventDefault();
    setMessage("");
    setSelectedStars(0);
    // setFetched(true);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
    setCharacters(e.target.value.length);
    if (message.length <= 6 || message.length >= 140) {
      setCharCheck(true);
    } else {
      setCharCheck(false);
    }
  };

  const characterLimit = () => {
    if (charCheck) {
      return " transition-opacity duration-500 opacity-100 text-text-dark text-right";
    } else {
      return "transition-opacity duration-500 opacity-0 text-text-dark text-right ";
    }
  };

  return (
    <section className="bg-main-red w-full pt-12 laptop:pt-28">
      {loadingProduct ? (
        <Loading />
      ) : (
        <>
          <div className="w-9/12 max-w-[700px] m-auto text-text-light font-heading">
            <h2>Write review for {product.title}</h2>
            <form id="reviewForm">
              <textarea
                name="textarea"
                className="text-text-dark w-full resize-none p-2 rounded-md "
                id="textForm"
                value={message}
                cols="20"
                rows="4"
                placeholder="Write your review here..."
                onChange={handleMessage}
              ></textarea>
              <div className="lower-info flex justify-between align-center my-2">
                <p className={characterLimit()}>{characters}/140</p>
                <div className="flex gap-2 justify-items-center gap-12">
                  <StarRating
                    selectedStars={selectedStars}
                    setSelectedStars={setSelectedStars}
                  />
                  <button
                    className="send-button bg-main-yellow text-text-dark px-6 py-2 rounded-full hover:bg-strong-yellow hover:cursor-pointer"
                    onClick={handleSend}
                    disabled={charCheck}
                  >
                    Send review
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </section>
  );
};
