import React from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3> Login</h3>
        <input type="text" placeholder="Enter email" />
        <input type="text" placeholder="password" />
        <br />
        <button
          onClick={() => {
            navigate("/account");
          }}
        >
          Enter
        </button>
        <p>
          Dont have account <a href="/signUp"> Click here</a>{" "}
        </p>
      </div>
    </div>
  );
};
