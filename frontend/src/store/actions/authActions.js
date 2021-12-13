import { setNotification } from "../ui-slice";
import { setUser, resetUserInfo, setIsLogged } from "../user-slice";

export const register = ({ fullname, email, password, history }) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (data.status === 200) {
        dispatch(
          setNotification({
            variant: "success",
            message: "Você foi cadastrado com sucesso!",
          })
        );
      } else {
        dispatch(
          setNotification({
            variant: "error",
            message: data.message,
          })
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const login = ({ email, password, history }) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.status === 200) {
        dispatch(setUser({
          fullname: data.fullname,
          email: data.email
        }));
        localStorage.setItem("userToken", data.user);
        history.push("/");
      } else {
        dispatch(
          setNotification({
            variant: "error",
            message: data.message,
          })
        );
      }
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const logout = (history) => {
  return (dispatch) => {
    localStorage.removeItem("userToken");
    dispatch(setIsLogged(false));
    dispatch(resetUserInfo());
    history.push("/");
  };
};

export const isLoggedIn = () => {
  if (localStorage.getItem("userToken")) return true;
  return false;
};

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/userInfo", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      });

      const data = await response.json();
      dispatch(
        setUser({
          id: data.id,
          fullname: data.fullname,
          email: data.email,
        })
      );
    } catch (error) {
      console.log(error)
    }
  };
};
