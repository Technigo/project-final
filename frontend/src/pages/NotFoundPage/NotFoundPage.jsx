import React from "react";
import { Button } from "../../common/ReusableComponents/Button/Button";

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <section className="not-found-container">
        <h2>(404) Page not found. </h2>
        <Button to="/" variant="hero" label="Go to homepage" />
      </section>
    </div>
  );
};
