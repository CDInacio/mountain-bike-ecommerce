const express = require("express");
const router = express.Router();
const key = process.env.STRIPE_KEY;
const stripe = require("stripe")(key);

// stripe payment logic
router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "BRL",
    },
    (stripeError, stripeResponse) => {
      if (stripeError) {
        return res.json(stripeError);
      } else {
        return res.json(stripeResponse);
      }
    }
  );
});

module.exports = router;
