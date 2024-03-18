import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useResetPassword = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const resetPassword = async (
    email,
    password,
    confirmPassword
  ) => {
    setError(false);
    setIsLoading(true);
    if (toast.isActive("t1")) {
      toast.closeAll();
    }

    const data = {
      email,
      password,
      confirmPassword,
    };
    await axios
      .post("https://user-auth-mern-p7pa.onrender.com/users/reset-password", data)
      .then(() => {
        toast({
          id: "t1",
          title: "Success",
          status: "success",
          description: "Password successfully changed",
        });
        navigate("/user/login");
        setError(false);
        setIsLoading(false);
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          toast({
            id: "t1",
            title: "Error",
            status: "error",
            description: err.response?.data.message,
          });
          setError(true);
          setIsLoading(false);
        } else {
          toast({
            id: "t1",
            title: "Error",
            status: "error",
            description: err.response?.data.message,
          });
          setError(true);
          setIsLoading(false);
        }
      });

    };
    return { error, isLoading, resetPassword };
};
export default useResetPassword;
