import React from "react";
import { Button } from "../../common/ReusableComponents/Button/Button";
import "./NotFoundPage.css";

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <section className="not-found-container">
        <h2>(404) Page not found. </h2>
        <p>Sorry, this page does not exist. Try going to a different page. </p>
        <Button to="/" variant="shop" label="Go to homepage" />
      </section>
    </div>
  );
};
