import { toast } from "react-hot-toast";
import { authApi } from "../../apis/authApis";
import { apiConnector } from "../../apis/apicConnector";
import { setLoading, setToken, setUser } from "../../slices/authSlice";

export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", authApi.SEND_OTP_API, {
        email,
      });
      console.log("SEND OTP API RESPONSE", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("OTP Sent Successfully");
      navigate("/verify-email");
    } catch (error) {
      console.error("SEND OTP API ERROR:", error);
      toast.error(`Could Not Send OTP. Error: ${error.message}`);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function signUp(
  firstName,
  lastName,
  username,
  gender,
  role,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", authApi.SINGUP_API, {
        firstName,
        lastName,
        username,
        gender,
        accountType: role,
        email,
        password,
        confirmPassword,
        otp,
      });

      console.log("SIGNUP API RESPONSE", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR", error.message);
      toast.error("Signup Failed");
      navigate("/signup");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function login(
  email,
  password,
  navigate
) {
  return async(dispatch) => {
    dispatch(setLoading(true));
    const toastId = toast.loading("Loading...");
    try {
      const res = await apiConnector("POST",authApi.LOGIN_API,{
        email,
        password
      });
      console.log('Login Successful');
      console.log(res.data)
      localStorage.setItem('token', JSON.stringify(res.data.token));
      localStorage.setItem('user', JSON.stringify(res.data.user));
      dispatch(setToken(res.data.token))
      dispatch(setUser({...res.data.user}))
      toast.success("Login Successfull");
      toast.dismiss(toastId)
      navigate('/');
    } catch (err) {
      console.log('Login Error:', err.message);
      toast.dismiss(toastId);
      toast.error('Login Error...')
    }
    dispatch(setLoading(false))
  }
} 

