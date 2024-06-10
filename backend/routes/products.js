import express from "express";

import { Product } from "../models/productSchema";

const router = express.Router();

//Product Endpoints
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().exec();
    //For Search bar in Frontend use this endpoint as well
    const productTitle = req.query.title;

    if (productTitle) {
      const titleSearch = async (productTitle) => {
        const resultSearch = await Product.find({
          title: { $regex: new RegExp(productTitle, "i") },
        }).exec();
        return resultSearch;
      };
      const titleResults = await titleSearch(productTitle);
      if (titleResults.length > 0) {
        res.status(200).json({
          titleResults: titleResults,
          message: "The following products were found.",
        });
      } else {
        res.status(404).json({ message: "Sorry, we didn't find any product." });
      }
    } else if (products.length > 0) {
      res.status(200).json({
        products: products,
        message: "The following products are in stock.",
      });
    } else {
      res.status(404).json({
        message: "Sorry, we didn't find any products.",
      });
    }
  } catch (error) {
    console.error("The following error occured:", error);
    res.status(500).json({
      message:
        "Sorry, this page is not available at the moment. Please try again later.",
    });
  }
});

router.get("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findOne({ _id: productId }).exec();

    if (product) {
      res
        .status(200)
        .json({ product: product, message: "The product was found." });
    } else {
      res.status(404).json({
        message: "Sorry, there is no product with that search criteria.",
      });
    }
  } catch (error) {
    console.error("The followind error occured:", error);
    res.status(500).json({
      message:
        "Sorry, this page is not available at the moment. Please try again later.",
    });
  }
});

export default router;
