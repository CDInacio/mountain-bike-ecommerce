import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";

import { Button } from "@material-ui/core";

import { privateRequest } from "../services/api";


const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const payRequest = async () => {
      try {
        const { data } = await privateRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 2000,
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (stripeToken) {
      payRequest();
    }
  }, [stripeToken]);

 
};

export default Pay;
