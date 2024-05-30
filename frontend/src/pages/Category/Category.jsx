import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Category.css";

export const Category = () => {
  const { category } = useParams();
  return <div>Category</div>;
};
