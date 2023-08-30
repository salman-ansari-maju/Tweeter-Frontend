import "./styles.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { SignUp } from "./pages/SignUp";
function App() {
  const userString = localStorage.getItem("user");
  let auth = null;

  // Convert the JSON string back to an object
  if (userString) {
    const user = JSON.parse(userString);
    const token = user.user.token;
    // console.log(token);
    if (token) {
      auth = true;
    } else {
      auth = false;
    }
  }

  // if (auth === null) {
  //   return <h1>Loading ...</h1>;
  // }

  if (!auth) {
    return (
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    );
  }

  if (auth) {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    );
  }
}

export default App;
