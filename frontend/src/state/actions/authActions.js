import {
  loginRequest,
  loginRequestError,
  loginRequestSuccess,
} from "../userSlice";
import { publicRequest } from "../../services/api";

export const login = async (dispatch, user) => {
  dispatch(loginRequest());
  try {
    const { data } = await publicRequest.post("/user/login", user);
    if (data.status === 200) {
      dispatch(loginRequestSuccess(data));
    } else {
        dispatch(loginRequestError(data));
    }
  } catch (error) {
    dispatch(loginRequestError());
  }
};

export const register = async (dispatch, user) => {
  dispatch(loginRequest());
  try {
    const { data } = await publicRequest.post("/user/login", user);
    dispatch(loginRequestSuccess(data));
  } catch (error) {
    dispatch(loginRequestError());
  }
};
