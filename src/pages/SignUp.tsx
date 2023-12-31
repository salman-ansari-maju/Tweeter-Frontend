import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export const SignUp = () => {
  const navigate = useNavigate();
  const api_Url = "http://localhost:3000";
  const { reset, register, handleSubmit } = useForm<FormValues>();

  async function fetchData(url: string, param: FormValues) {
    try {
      const requestBody = JSON.stringify(param);

      const response = await fetch(url, {
        method: "POST", // Use POST method for sending JSON data
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });

      if (!response) {
        throw new Error(`HTTP error! Status: ${response}`);
      }

      const data = await response.json();
      console.log(data);
      navigate("/");
      return data;
    } catch (error) {
      throw new Error(`Fetch error.`);
    }
  }

  const setterFunc = (data: any) => {
    // setEmail(data);
    reset();
    console.log(data);
    fetchData(api_Url, data);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <form
          onSubmit={handleSubmit(setterFunc)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "end",
          }}
        >
          <label>
            Name:
            <input type="text" {...register("name")} />
          </label>
          <br />

          <label>
            Email:
            <input type="email" {...register("email")} />
          </label>
          <br />

          <label>
            Password:
            <input type="password" {...register("password")} />
          </label>

          <br />
          <input type="submit" value="submit" />
        </form>
        <p>
          Already have account <a href="/"> login </a>
        </p>
      </div>
    </div>
  );
};

// <h3> signUp</h3>
//         <input
//           type="text"
//           onChange={(e) => {
//             handleChange(e);
//           }}
//           placeholder="Enter email"
//         />
//         <input type="text" placeholder="password" required />

//         <button onClick={() => fetchData(api_Url, email)}>Enter</button>
//         <p>
//           Dont have account <a href="/signUp"> Click here</a>{" "}
//         </p>
