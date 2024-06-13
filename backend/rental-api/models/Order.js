import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  deliveryAddress: { type: String, required: true },
  customerEmail: { type: String, required: true },
  items: [
    {
      rental: { type: Schema.Types.ObjectId, ref: "Rental", required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
