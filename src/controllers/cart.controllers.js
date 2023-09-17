const Cart = require("../models/cart.models");

const postCart = async (req, res) => {
  console.log(req.body);
  //   res.json(req.body);
  const { products,orderStatus,totalAmount, paymentMethodId } = req.body;

  try {
    const data = new Cart({products,totalAmount:Math.ceil(totalAmount),orderStatus});
    await data.save();
    // const deal = await Category.insertMany(req.body);

    res.status(200).json({
      data,
      paymentMethodId,
      status: true,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  postCart,
};
