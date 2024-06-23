import dotenv from "dotenv";
import asyncHandler from "express-async-handler";
import fetch from "node-fetch";
import { User } from "../models/User";
import { Order } from "../models/Order";

dotenv.config();

export const createSession = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const user = await User.findOne({ _id: userId }).populate("cartItems").exec();
  console.log(user.cartItems);
  const products = user.cartItems;
  const orderLines = products.map(product => {
    const totalPrice = (product.price + product.price * 0.25).toFixed(2) * 100;
    const totalTaxAmount = (product.price * 0.25).toFixed(2) * 100;
    return {
      name: product.templateName,
      quantity: 1,
      unit_price: totalPrice,
      total_amount: totalPrice,
      tax_rate: 2500,
      total_tax_amount: totalTaxAmount,
      reference: product._id,
    };
  });
  const orderAmount = orderLines.reduce(
    (total, item) => total + item.total_amount,
    0
  );
  const resp = await fetch(
    `https://api.playground.klarna.com/payments/v1/sessions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${process.env.KLARNA_API_KEY}`,
      },
      body: JSON.stringify({
        intent: "buy",
        purchase_country: "SE",
        purchase_currency: "SEK",
        locale: "en-SE",
        order_amount: orderAmount,
        order_lines: orderLines,
      }),
    }
  );
  if (resp.ok) {
    const data = await resp.json();
    const order = new Order({
      user: userId,
      totalAmount: orderAmount,
      orderLines: orderLines,
      clientToken: data.client_token,
      sessionId: data.session_id,
    });
    await order.save();
    res.status(200).json(order);
  } else {
    throw new Error("Create session failed");
  }
});
