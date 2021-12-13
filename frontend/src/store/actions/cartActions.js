import { updateCart } from "../cart-slice";

export const sendCartData = (data) => {
  return async (dispatch) => {
    try {
      await fetch("http://localhost:5000/addItemToCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${localStorage.getItem("userToken")}`,
        },
        body: JSON.stringify({
          items: data.items,
        }),
      });
    } catch (error) {}
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/fetchCart", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      const data = await response.json();
      console.log(data)
      dispatch(
        updateCart({
          items: data,
        })
      );
    } catch (error) {}
  };
};
