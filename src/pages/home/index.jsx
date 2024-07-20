import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookCard from "../../components/book-card";
import Menu from "../../components/menu";
import { Grid, GridItem, SimpleGrid, Heading, Text, Box } from "@chakra-ui/react";

const Home = () => {
  const [query, setQuery] = useState("");
  const [maxResults, setMaxResults] = useState(10);
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const user = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}`
      )
      .then((res) => {
        if (res.data.items.length > 0) {
          setCards(res.data.items);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("error ", err);
      });
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
      if (item.volumeInfo.imageLinks.smallThumbnail) {
        smallThumbnail = item.volumeInfo.imageLinks.smallThumbnail;
      }
      return (
        <div className="col-lg-3 col-md-4 col-6" key={item.id}>
          <BookCard
            smallThumbnail={smallThumbnail}
            title={item.volumeInfo.title}
            publisher={item.volumeInfo.publisher}
            authors={item.volumeInfo.authors}
            previewLink={item.volumeInfo.previewLink}
          />
        </div>
      );
    });
    if (loading) {
      return (
        <div className="d-flex justify-content-center mt-3">
        </div>
      );
    } else {
      return (
        <div className="container my-5">
          <div className="row">{items}</div>
        </div>
      );
    }
  };

  const boxStyles = {
    p: "10px",
    m: "10px",
    textAlign: "center",
    color: "white",
    bg: "purple.400",
    // filter: "blur(2px)"
  }
  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        <GridItem
          p="30px"
          as="aside"
          colSpan="1"
          bg="purple.400"
          minHeight="100vh"
        >
          SIDEBAR
        </GridItem>
        
        <GridItem
          as="main"
          colSpan="5"
          p="40px"
        >
          <Menu />
          <Text color="blue.500" fontWeight="bold">
            This is the Gallery Book application React-based. There are many features like login, logout & register (with validation) and there are also search and filter book data features. API data retrieved from the https://googleapis.com/books/v1. This React-based application uses Redux for State Management.
          </Text>
          <Box sx={boxStyles}>
            Hi Buddy!!!
          </Box>

          <SimpleGrid p="10px" spacing={10} minChildWidth="250px">
          <Box bg="white" h="200px" border="1px solid"></Box>
          <Box bg="white" h="200px" border="1px solid"></Box>
          <Box bg="white" h="200px" border="1px solid"></Box>
          <Box bg="white" h="200px" border="1px solid"></Box>

          <Box bg="white" h="200px" border="1px solid"></Box>
          <Box bg="white" h="200px" border="1px solid"></Box>
          <Box bg="white" h="200px" border="1px solid"></Box>
          <Box bg="white" h="200px" border="1px solid"></Box>

          <Box bg="white" h="200px" border="1px solid"></Box>
          <Box bg="white" h="200px" border="1px solid"></Box>
          <Box bg="white" h="200px" border="1px solid"></Box>
          <Box bg="white" h="200px" border="1px solid"></Box>
          </SimpleGrid>
        </GridItem>

        {/* Search Form */}
        {user ? (
          <div className="col-12">
            <form className="d-flex mt-2" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={queryHandleChange}
              />
              <input
                className="form-control me-2"
                type="text"
                placeholder="Max Results"
                style={{ width: "150px" }}
                value={maxResults}
                onChange={maxResultsHandleChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        ) : ('')}
        <div className="col-12">{handleCards()}</div>
      </Grid>
    </>
  );
};

export default Home;
