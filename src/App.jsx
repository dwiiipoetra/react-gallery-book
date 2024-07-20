import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements, 
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<h1>Pages Not Found</h1>} />
      </>
    )
  )
  return (<RouterProvider router={router}/>);
}

export default App;
