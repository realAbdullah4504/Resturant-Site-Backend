const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
      products: [
        {
          itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Deal",
            required: true,
          },
          count: { type: Number, default: 1 },
        },
      ],
      totalAmount: { type: Number, default: 0 },
      orderStatus: { type: String, default: "pending" },
    },
    {
      timestamps: true,
    }
  );

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
