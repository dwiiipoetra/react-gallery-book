import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  useBreakpointValue
} from '@chakra-ui/react';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    dispatch({
      type: "REGISTER",
      payload: {
        id: Math.floor(Math.random() * 100),
        username,
        email,
        password,
      },
    });
    navigate("/");
  };

  return (
    <Box
    maxW="md"
    mx="auto"
    mt={8}
    p={4}
    borderWidth={1}
    borderRadius="lg"
    boxShadow="md"
    >
    <Heading as="h2" size="lg" textAlign="center" mb={6}>
      Register
    </Heading>
    <form onSubmit={handleRegister}>
      <Stack spacing={4}>
      <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
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
        <FormControl id="confirm-password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        <p>
            Already have an account? <Link to="/login">Login</Link>
        </p>
        <Button
          type="submit"
          colorScheme="purple"
          size={useBreakpointValue({ base: 'md', md: 'lg' })}
          width="full"
        >
          Register
        </Button>
      </Stack>
    </form>
    </Box>
  );
};

export default Register;
