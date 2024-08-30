import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, Form } from "react-router-dom";
import BookCard from "../../components/bookCard";
import Sidebar from "../../components/sidebar";
import Menu from "../../components/menu";
import { Grid, GridItem, SimpleGrid, Text, Box, Spinner, FormControl, Input, Stack, Select, Wrap, WrapItem, Button } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const Home = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [query, setQuery] = useState("");
  const [maxResults, setMaxResults] = useState(10);
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const user = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
      // axios.get(`${apiUrl}/books/v1/volumes?q=${query}&maxResults=${maxResults}`)
      // .then((res) => {
      //   if (res.data.items.length > 0) {
      //     setCards(res.data.items);
      //     setLoading(false);
      //   }
      // })
      // .catch((err) => {
      //   console.log("error ", err);
      // });

      try {
        const response = await fetch(import.meta.env.VITE_API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCards(data.items);
        setLoading(false);
      } catch (error) {
        console.log("error ", error);
      }
  };
  const queryHandleChange = (e) => {
    setQuery(e.target.value);
  };
  const maxResultsHandleChange = (e) => {
    setMaxResults(e.target.value);
  };

  const handleCards = () => {
    const items = cards.map((item, i) => {
      let smallThumbnail = "";
      if (item.volumeInfo.imageLinks?.smallThumbnail) {
        smallThumbnail = item.volumeInfo.imageLinks.smallThumbnail;
      }
      return (
        <BookCard
          key={item.id}
          smallThumbnail={smallThumbnail || ''}
          title={item.volumeInfo.title || ''}
          subtitle={item.volumeInfo.subtitle || 'No subtitle'}
          publisher={item.volumeInfo.publisher || 'Unknown'}
          authors={item.volumeInfo?.authors || ''}
          previewLink={item.volumeInfo.previewLink || ''}
        />
      );
    });
    if (loading) {
      return (
        <Box align="center">
          <Spinner
            colorScheme="purple"
          />
        </Box>
      );
    } else {
      return (items);
    }
  };

  const boxStyles = {
    p: "30px",
    my: "40px",
    textAlign: "center",
    bg: "purple.400",
    borderRadius: "md",
    // filter: "blur(2px)"
  }
  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        <GridItem
          p={{ base: "20px", lg: "30px"}}
          as="aside"
          // tampilan mobile akan fullwidth, large akan 1/3, xl akan 1/6
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          bg="purple.400"
          // tampilan large akan membuat sidebar fullheight
          minHeight={{ lg: "100vh" }}
        >
          <Sidebar/>
        </GridItem>
        
        <GridItem
          as="main"
          // tampilan mobile akan fullwidth, large akan 4/6, xl akan 5/6
          colSpan={{ base: 6, lg: 4, xl: 5 }}
          p="20px"
        >
          <Menu />
          <Text color="purple.400" fontWeight="bold">
            This is the Gallery Book application React-based. There are many features like login, logout & register (with validation) and there are also search and filter book data features. API data retrieved from the https://googleapis.com/books/v1. This React-based application uses Redux for State Management.
          </Text>
          <Box sx={boxStyles}>
            <Form onSubmit={handleSubmit}>
              {user ?
              (<FormControl isRequired="true">
                <Stack spacing={4}>
                  <Input
                    type="text"
                    bg="gray.100"
                    colorScheme="purple"
                    placeholder="Keyword"
                    value={query}
                    onChange={queryHandleChange}
                  />
                  <Select
                    bg="gray.100"
                    colorScheme="purple"
                    placeholder="Max Results"
                    value={maxResults}
                    onChange={maxResultsHandleChange}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </Select>
                </Stack>
                <Wrap>
                  <WrapItem>
                    <Button
                    type="submit"
                    colorScheme="purple"
                    mt="20px"
                    align="left"
                    leftIcon={<Search2Icon/>}
                    >
                      Find Your Favorite Books
                    </Button>
                  </WrapItem>
                </Wrap>
              </FormControl>
              )
              :
              <Text color="red.300" fontWeight="semibold">
                You must <Link to="/login">login</Link> to access this page!
              </Text>
              }
            </Form>
          </Box>

          {/* <SimpleGrid spacing={10} minChildWidth="300px"> */}
          {/* <SimpleGrid spacing={10} columns={{base: 1, sm: 2, md: 2, xl: 3}}> */}
          {user &&
            <SimpleGrid spacing={10} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}>
            {handleCards()}
            </SimpleGrid>
          }
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
