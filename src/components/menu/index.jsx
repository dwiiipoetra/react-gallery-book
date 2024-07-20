import { Flex, Spacer, Box, HStack, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // console.log("all users: ", users);
  // console.log("logged in user: ", user);

  return (
    <>
      <Flex as="nav" p="10px" mb="40px" alignItems="center">
        <Heading as="h1" bg="purple.400" borderLeft="20px solid" borderColor="purple.200" color="white" pl="20px" pr="10px" py="8px">React Gallery Book</Heading>
        <Spacer/>
        <HStack spacing="20px">
          {user ? (
            <>
            <Box bg="gray.200" p="10px">M</Box>
            <Text>{user.email} (Logout)</Text>
            <Link
              to="#"
              onClick={() => {
                dispatch({
                  type: "LOGOUT",
                });
              }}
            >
            </Link>
            </>
          ) : (
            <Button colorScheme="purple">
              <Link to="/login">
                Login
              </Link>
            </Button>
          )}
        </HStack>
      </Flex>
      {/* <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
        <Box w="150px" h="50px" bg="red">Column 1</Box>
        <Box w="150px" h="50px" bg="red">Column 2</Box>
        <Box w="150px" h="50px" bg="red" flexGrow="1">Column 3</Box>
        <Box w="150px" h="50px" bg="red" flexGrow="2">Column 4</Box>
      </Flex> */}
    </>
  );
};

export default Menu;
