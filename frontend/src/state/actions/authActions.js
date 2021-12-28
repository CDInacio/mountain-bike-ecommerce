import {
  loginRequest,
  loginRequestError,
  loginRequestSuccess,
  singupRequest,
  singupRequestSuccess,
  singupRequestError,
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
  try {
    dispatch(singupRequest());
    const { data } = await publicRequest.post("/user/register", user);
    dispatch(singupRequestSuccess(data));
  } catch (error) {
    dispatch(singupRequestError(error.message));
  }
};

