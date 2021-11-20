import {
  setProducts,
  setSingleProduct,
  setProductsByDep,
  setSingleProductSpec,
  setSuspensions,
  setFrames
} from "../product-slice";

import {setNotification, setIsLoading} from '../ui-slice';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/getProducts");
      const data = await response.json();
      let loadedProducts = [];

      for (let key in data) {
        loadedProducts.push({
          id: key,
          productName: data[key].productName,
          price: data[key].price,
          imageUrl: data[key].imageUrl,
        });
      }

      dispatch(setProducts(loadedProducts));
    } catch (error) {
      console.log(error);
    }
  };
};



export const fetchByDepartment = (department) => {
  return async (dispatch) => {
    try {
      const formated = department.toLowerCase();
      const response = await fetch(
        `http://localhost:5000/product/${formated}`
      );
      const data = await response.json();
      let loadedProducts = [];
      for (let key in data) {
        loadedProducts.push({
          id: key,
          category: data[key].category,
          color: data[key].color,
          brand: data[key].brand,
          productName: data[key].productName,
          price: data[key].price,
          imageUrl: data[key].imageUrl,
        });
      }
      console.log(loadedProducts);
      dispatch(setProductsByDep(loadedProducts));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSuspension = () => {
  return async (dispatch) => {
    try{
      dispatch(setIsLoading(true));
      const response = await fetch(`http://localhost:5000/component/suspension`);
      const data = await response.json();
      let loadedData = [];
      for(let key in data) {
        loadedData.push({
          id: key,
          price: data[key].price,
          productName: data[key].productName,
          imageUrl: data[key].imageUrl
        })
      }
      dispatch(setIsLoading(false));
      dispatch(setSuspensions(loadedData));
    } catch(error) {
  
    }   
  }
}

export const fetchFrame = () => {
  return async (dispatch) => {
    try{
      dispatch(setIsLoading(true));
      const response = await fetch(`http://localhost:5000/component/frame`);
      const data = await response.json();
      let loadedData = [];
      for(let key in data) {
        loadedData.push({
          id: key,
          price: data[key].price,
          productName: data[key].productName,
          imageUrl: data[key].imageUrl
        })
      }
      dispatch(setIsLoading(false));
      dispatch(setFrames(loadedData));
    } catch(error) {
  
    }   
  }
}

export const fetchSingleProduct = (param) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const response = await fetch(
        `http://localhost:5000/singleproduct/${param}`
      );
      const data = await response.json();
      if (data.status === 400) {
        dispatch(setNotification({
          variant: "error",
          message: data.message
        }))
        return;
      }
      dispatch(setIsLoading(false));
      dispatch(setSingleProductSpec((data.specification)))
      let formatedName = data.productName.replaceAll("-", " ");
      dispatch(setSingleProduct({
        productName: formatedName,
        color: data.color,
        quantity: data.quantity,
        price: data.price,
        discription: data.discription,
        department: data.department,
        imageUrl: data.imageUrl
      }));
    } catch (error) {
      console.log(error);
    }
  };
};
