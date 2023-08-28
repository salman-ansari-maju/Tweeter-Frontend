import "./styles.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { SignUp } from "./pages/SignUp";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/account" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
