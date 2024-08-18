import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  rate: { type: Number, required: true },
  count: { type: Number, required: true },
});

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  Discount: { type: Number },
  rating: { type: ratingSchema, required: true },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
