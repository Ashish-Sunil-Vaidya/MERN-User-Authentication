import {
  Grid,
  Text,
  Container,
  Button,
  Link,
  Alert,
  AlertIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import MyLogo from "../components/MyLogo";
import MyInputField from "../components/MyInputField";
import { useState } from "react";
import MyPasswordField from "../components/MyPasswordField";
import useSignup from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.50", "gray.700");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup(email, password, confirmPassword);
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
      <Alert status="warning">
        <AlertIcon />
        <Text fontSize="sm">
          This is a demo project, please don't use your real email and password.
          Use a fake email and password instead.
        </Text>
      </Alert>

      <MyLogo />
      <Grid
        gap={5}
        minWidth="300px"
        maxW="400px"
        bgColor={bgColor}
        padding="20px 40px 40px 40px"
        rounded="md"
      >
        <Text fontWeight="bold" textAlign="center" fontSize="lg">
          Create a new account
        </Text>

        <MyInputField
          label="Email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          error={error}
        />
        <MyPasswordField
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          error={error}
        />
        <MyPasswordField
          label="Confirm Password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          error={error}
        />
        <form onSubmit={handleSubmit}>
          <Button
            isLoading={isLoading}
            colorScheme="blue"
            variant="solid"
            loadingText="Creating Account..."
            w="100%"
            type="submit"
          >
            Create Account
          </Button>
        </form>
        <Text fontSize="sm">
          Have an account?{" "}
          <Link color="blue.500" fontWeight="bolder" onClick={
            () => {
              navigate("/user/login");
            }
          }>
            Login
          </Link>
        </Text>
      </Grid>
    </Container>
  );
};
export default Signup;
