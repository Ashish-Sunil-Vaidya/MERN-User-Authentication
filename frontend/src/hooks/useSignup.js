import useAuth from "./useAuth";
import axios from "axios";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const signup = async (
    email,
    password,
    confirmPassword
  ) => {
    setError(false);
    setIsLoading(true);
    if (toast.isActive("toast")) toast.closeAll();

    const data = {
      email,
      password,
      confirmPassword,
    };
    await axios
      .post("https://user-auth-mern-p7pa.onrender.com/users/signup", data)
      .then((res) => {
        setError(false);
        const user = {
          email: res.data.email,
          token: res.data.token,
        };
        dispatch({ type: "LOGIN", payload: user });
        localStorage.setItem("user", JSON.stringify(user));
        toast({
          id: "toast",
          title: "Signup Successful",
          description: "You have successfully signed up",
          status: "success",
        });
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          setError(true);
          toast({
            id: "toast",
            title: "Signup Failed",
            description: err.response?.data.message,
            status: "error",
          });
          setIsLoading(false);
        } else {
          setError(true);
          toast({
            id: "toast",
            title: "Signup Failed",
            description: "Something went wrong",
            status: "error",
          });
          console.log(err);
          setIsLoading(false);
        }
      });
  };

  return { error, isLoading, signup };
};
export default useSignup;
