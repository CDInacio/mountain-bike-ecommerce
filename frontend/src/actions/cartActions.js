// import api from "../services/api";

// export const addToCart = (prodName, qty) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await api.get(`/api/products/${prodName}`);
//       console.log(data);
//       dispatch({
//         type: ADD_TO_CART,
//         payload: {
//           id: data._id,
//           prodName: data.productName,
//           image: data.imageUrl,
//           price: data.price,
//           qty,
//         },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
