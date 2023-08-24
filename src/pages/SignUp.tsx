import React from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
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
        <h3> SignUp</h3>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Enter email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="Confirm Password" />

        <br />
        <button
          onClick={() => {
            navigate("/account");
          }}
        >
          Enter
        </button>
        <p>
          Already have account <a href="/"> Click here</a>{" "}
        </p>
      </div>
    </div>
  );
};
