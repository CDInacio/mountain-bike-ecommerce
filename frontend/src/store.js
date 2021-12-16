// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import {
//   productReducer,
//   singleProductReducer,
// } from "./reducers/productReducers";
// import { CartReducer } from "./reducers/cartReducer";
// import { loginReducer } from "./reducers/userReducers";
// import thunk from "redux-thunk";

// const initialState = {};

// const reducer = combineReducers({
//   products: productReducer,
//   singleProduct: singleProductReducer,
//   cart: CartReducer,
//   userLogin: loginReducer,
// });

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// // the thunk is goona allow me to run async code inside actions
// const store = createStore(
//   reducer,
//   initialState,
//   composeEnhancer(applyMiddleware(thunk))
// );
// export default store;
