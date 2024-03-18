import { Grid, Text, Container, Button, Link, useColorModeValue } from "@chakra-ui/react";
import MyLogo from "../components/MyLogo";
import MyInputField from "../components/MyInputField";
import { useState } from "react";
import MyPasswordField from "../components/MyPasswordField";
import useResetPassword from "../hooks/useResetPassword";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { isLoading, error, resetPassword } = useResetPassword();
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.50", "gray.700");

  const handleSubmit = async (event) => {
    event.preventDefault();
    resetPassword(email, password, confirmPassword);
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
        gap={5}
        minWidth="300px"
        maxW="400px"
        bgColor={bgColor}
        padding="20px 40px 40px 40px"
        rounded="md"
      >
        <Text fontWeight="bold" textAlign="center" fontSize="lg">
          Reset Password
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
            loadingText="Processing request..."
            w="100%"
            type="submit"
          >
            Reset Password
          </Button>
        </form>
        <Text fontSize="sm">
          Remember Password?{" "}
          <Link color="blue.500" fontWeight="bolder"  onClick={
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
export default ResetPassword;
