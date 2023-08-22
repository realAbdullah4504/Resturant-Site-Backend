const mongoose = require("mongoose");

// const dealsSchema = new mongoose.Schema(
//   {
//     category: { type: Object, required: true },
//     title: { type: String, required: true },
//     price: { type: Number, required: true },
//     description: { type: String, required: true },
//     image: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );

const dealsSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, enum: ["small", "medium", "large"], required: true },
  type: { type: String, enum: ["deals", "menu"], required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Deal = mongoose.model("Deal", dealsSchema);
module.exports = Deal;
