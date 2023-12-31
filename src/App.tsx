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
    let token;
    if (user.message) {
      auth = false;
      console.log(user.message);
    } else {
      token = user.user.token;
      auth = true;
      console.log("acess granted");
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
