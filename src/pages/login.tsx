import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  password: string;
  email: string;
};

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [stat, setStat] = useState("");
  const api_Url = "http://localhost:3000";
  const { reset, register, handleSubmit } = useForm<FormValues>();

  // hitting api to get users information

  useEffect(() => {
    const setter = localStorage.getItem("status");
    console.log(setter);
    if (setter) {
      const parsed = JSON.parse(setter);
      setStat(parsed);
    }
  }, []);

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
      localStorage.setItem("user", JSON.stringify(data));

      if (data.message) {
        localStorage.setItem("status", JSON.stringify(data.message));
        // console.log(stat);
      }

      location.reload();
      return data;
    } catch (error) {
      throw new Error(`Fetch error.`);
    }
  }

  const setterFunc = (data: any) => {
    // setEmail(data);
    reset();
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
          Don't have account <a href="/signup"> SignUp </a>
        </p>
        <div
          style={{ display: "flex", justifyContent: "center", color: "red" }}
        >
          {" "}
          <p>{stat}</p>
        </div>
      </div>
    </div>
  );
};
