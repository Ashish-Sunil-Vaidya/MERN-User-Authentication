import {
  Grid,
  Text,
  Container,
  Button,

  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import MyLogo from "../components/MyLogo";
import MyInputField from "../components/MyInputField";
import { useState } from "react";
import MyPasswordField from "../components/MyPasswordField";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, login } = useLogin();
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.50", "gray.700");


  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(email, password);
  };

  return (
    <Container
      h="100svh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={3}
    >
      <MyLogo />
      <Grid
        gap={3}
        minWidth="300px"
        maxW="400px"
        bgColor={bgColor}
        padding="30px"
        rounded="md"
      >
        <Text fontWeight="bold" textAlign="center" fontSize="lg">
          Log into your Account
        </Text>

        <MyInputField
          label="Email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          error={error}
        />
        <MyPasswordField
          label="Password"
          placeholder="********"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          error={error}
        />
        <Text textAlign="right" fontSize="sm">
          Forgot Password?{" "}
          <Link
            color="blue.500"
            fontWeight="bolder"
            onClick={() => {
              navigate("/user/resetpassword");
            }}
          >
            Reset Password
          </Link>
        </Text>
        <form onSubmit={handleSubmit}>
          <Button
            isLoading={isLoading}
            colorScheme="blue"
            variant="solid"
            loadingText="Logging in..."
            w="100%"
            type="submit"
          >
            Login
          </Button>
        </form>
        <Text fontSize="sm">
          Don't have an account?{" "}
          <Link
            color="blue.500"
            fontWeight="bolder"
            onClick={() => {
              navigate("/user/signup");
            }}
          >
            Create Account
          </Link>
        </Text>
      </Grid>
    </Container>
  );
};

export default Login;
