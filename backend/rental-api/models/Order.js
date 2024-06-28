import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  deliveryAddress: { type: String, required: true },
  customerEmail: { type: String, required: true },
  items: [
    {
      rental: { type: Schema.Types.ObjectId, ref: "Rental", required: true },
      name: { type: String, required: true },
      amount: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
