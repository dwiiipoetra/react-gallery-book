import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import BookCard from "../book-card";
import Menu from "../menu";

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
          <Spinner
            animation="border"
            style={{ width: "2rem", height: "2rem" }}
          />
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

  return (
    <>
      <div className="row">
        <Menu />

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
        ) : (
          <p className="text-center">
            You must <Link to="/login">login</Link> for access the content
          </p>
        )}
        <div className="col-12">{handleCards()}</div>
      </div>
    </>
  );
};

export default Home;
