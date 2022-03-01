import axios from "axios";
import { useNavigate, Redirect } from "react-router";

const AuthActionType = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAIL: "LOGOUT_FAIL",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
};

const RegisterAuthAction = (userState, history, setErrorHandler) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/register", userState);
      const { data } = res;
      dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
      history.push("/login");
    } catch (error) {
      if (error.response) {
        dispatch({
          type: AuthActionType.REGISTER_FAIL,
          payload: error.response.data.message,
        });
        setErrorHandler({
          hasError: true,
          message: error.response.data.message,
        });
      }
    }
  };
};

const LoginAuthAction = (loginState, history, setErrorHandler) => {
  const API = process.env.API_URL;
  const navigate = useNavigate();
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        loginState
      );
      console.log(res);
      const data = res.data;
      dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
      return <Redirect to="/timeline" />;
    } catch (error) {
      if (error.response) {
        dispatch({
          type: AuthActionType.LOGIN_FAIL,
          payload: error.response.data.message,
        });
      }
      setErrorHandler({ hasError: true, message: error.response.data.message });
    }
  };
};

const LogOutAuthAction = (history) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/logout");
      const { data } = res;
      dispatch({
        type: AuthActionType.LOGOUT_SUCCESS,
        payload: data.message,
      });
      history.push("/login");
    } catch (error) {
      if (error.response) {
        dispatch({
          typetype: AuthActionType.LOGIN_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

export {
  AuthActionType,
  RegisterAuthAction,
  LogOutAuthAction,
  LoginAuthAction,
};
