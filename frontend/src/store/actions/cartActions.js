export const sendCartData = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/addItemToCart", {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: data.items,
          totalQuantity: data.totalQuantity,
        }),
      });
    } catch (error) {}
  };
};
