import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Flex,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  useBreakpointValue
} from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = users.find(
      (user) => user.email === email && user.password === password
    );

    if (payload) {
      dispatch({
        type: "LOGIN",
        payload,
      });
      alert("Succesfully log in...");
      navigate("/");
    } else {
      alert("Wrong Credential !!!");
    }
  };

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
    >
      <Box
      maxW="md"
      mx="auto"
      p={20}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="md"
      >
      <Heading as="h2" size="lg" textAlign="center" mb={6}>Login</Heading>
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
          <Button
            type="submit"
            colorScheme="purple"
            size={useBreakpointValue({ base: 'md', md: 'lg' })}
            width="full"
          >
            Login
          </Button>
        </Stack>
      </form>
      </Box>
    </Flex>
  );
};

export default Login;
