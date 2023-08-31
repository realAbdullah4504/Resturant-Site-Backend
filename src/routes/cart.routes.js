const router = require("express").Router();
const cart = require("../controllers/cart.controllers");
//for stripe
const stripe = require("stripe")(
    "sk_test_51Njbr5F88g5WT6iJO03WeVxwlWEobjnfuOY5wGqMc2a3n0X9K4J77i7DhHdXHnLmwWchQ9ohOEgEu8biCFwnbuAp00t1PG5syB"
  ); // Replace with your actual secret key
  
  const createPaymentIntentMiddleware = async (req, res, next) => {
    try {
      const { paymentMethodId, totalAmount, currency } = req.body;
  
      console.log("paymentMethod", req.body);
  
      const paymentIntent = await stripe.paymentIntents.create({
        amount:totalAmount*100,
        currency,
        payment_method: paymentMethodId,
        payment_method_types: ["card"],
        confirm: true,
        return_url: "https://your-website.com/return-url",
      });
  
      req.paymentIntent = paymentIntent; // Attach payment intent to request object
      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

router.post("/", createPaymentIntentMiddleware, cart.postCart);

module.exports = router;
