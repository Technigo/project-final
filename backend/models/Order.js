import mongoose from "mongoose";

const { Schema, model } = mongoose;

const orderLinesSchema = new Schema({
  reference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  name: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  unit_price: {
    type: Number,
  },
  tax_rate: {
    type: Number,
    default: 2500,
  },
  total_amount: {
    type: Number,
  },
  total_tax_amount: {
    type: Number,
  },
});

const orderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  clientToken: {
    type: String,
  },
  sessionId: {
    type: String,
  },
  totalAmount: {
    type: Number,
  },
  orderLines: [orderLinesSchema],
});

export const Order = model("Order", orderSchema);
