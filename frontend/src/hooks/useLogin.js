import useAuth from "./useAuth";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(false);
    if (toast.isActive("toast")) toast.closeAll();
    const data = {
      email,
      password,
    };
    await axios
      .post("https://user-auth-mern-p7pa.onrender.com/users/login", data)
      .then((res) => {
        setError(false);
        setIsLoading(false);
        const user = {
          email: res.data.email,
          token: res.data.token,
        };

        dispatch({ type: "LOGIN", payload: user });
        localStorage.setItem("user", JSON.stringify(user));
        toast({
          id: "toast",
          title: "Login Successful",
          description: "You have successfully logged in",
          status: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          setError(true);
          toast({
            id: "toast",
            title: "Login Failed",
            description: err.response?.data.message,
            status: "error",
          });

          setIsLoading(false);
        } else {
          toast({
            id: "toast",
            title: "Login Failed",
            description: "Something went wrong",
            status: "error",
          });

          setError(true);
          setIsLoading(false);
        }
      });
  };

  return { error, isLoading, login };
};
export default useLogin;
