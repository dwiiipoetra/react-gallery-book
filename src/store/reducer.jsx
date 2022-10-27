import { createStore } from "redux";

const initState = {
  users: [],
  loggedInUser: null,
  books: [
    {
      id: 1,
      title: "Book 1",
      price: 1000,
    },
    {
      id: 2,
      title: "Book 2",
      price: 2000,
    },
    {
      id: 3,
      title: "Book 3",
      price: 3000,
    },
  ],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
export default createStore(reducer);
