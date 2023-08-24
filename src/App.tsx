import { useState, useEffect } from "react";
import { Users } from "./Components/users";
import { TUser, TPost } from "./types";
import "./styles.css";
import Post from "./Components/Post";
import { UsersData } from "./data/user's data";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { SignUp } from "./pages/SignUp";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/account" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
