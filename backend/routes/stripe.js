import dotenv from "dotenv";
import express from "express";
import Stripe from "stripe";

dotenv.config();

const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount, productName, productDescription } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // amount in cents
      currency: "eur",
      description: productName, // Use product name as description
      metadata: {
        productDescription: productDescription, // Add product description to metadata
      },
    });

    res.status(200).json({
      message: "Payment successfull!",
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
