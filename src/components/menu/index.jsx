import { Flex, Spacer, Box, HStack, Avatar, AvatarBadge, Heading, Text, Button, Divider } from "@chakra-ui/react";
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
      <Flex as="nav" p="10px" alignItems="center">
        <Heading as="h1" bg="purple.400" borderLeft="20px solid" borderColor="purple.200" color="white" pl="20px" pr="10px" py="8px">React Gallery Book</Heading>
        <Spacer/>
        <HStack spacing="20px">
          {user ? (
            <>
              <Avatar name="Dwi Putra" bg="purple.400">
                <AvatarBadge width="1.3em" bg="purple.400">
                  <Text fontSize="xs" color="white">3</Text>
                </AvatarBadge>
              </Avatar>
              <Text>{user.email}</Text>
              <Button colorScheme="purple">
                <Link
                  to="#"
                  onClick={() => {
                    dispatch({
                      type: "LOGOUT",
                    });
                  }}
                >Logout</Link>
              </Button>
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
      
      <Divider my="10px" border="1px solid" borderColor="purple.400"/>
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
