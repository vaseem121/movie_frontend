import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <b
        style={{
          color: "#fff",
          fontSize: "28px",
        }}
      >
        Sign In
      </b>
      <input
        type="email"
        style={{
          height: "30px",
          width: "250px",
          backgroundColor: "#224957",
          borderRadius: "10px",
          color: "#fff",
          border: "none",
          padding: "5px 10px",
        }}
        value={email}
        onChange={(e)=>{
            setemail(e.target.value);
        }}
        placeholder="Email"
      />

      <input
      type="password"
        style={{
          height: "30px",
          width: "250px",
          backgroundColor: "#224957",
          borderRadius: "10px",
          color: "#fff",
          border: "none",
          marginTop: "10px",
          padding: "5px 10px",
        }}
        placeholder="Password"
        value={password}
        onChange={(e)=>{
            setpassword(e.target.value);
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <input type="checkbox" />
        <span
          style={{
            color: "#fff",
            fontSize: "12px",
          }}
        >
          Remember Me
        </span>
      </div>
      <button
        style={{
          height: "40px",
          width: "250px",
          border: "1px solid #2BD17E",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
          padding: "5px 10px",
          background: "#2BD17E",
        }}
        onClick={() => {
            if(email && password){
          navigate("/movie-list");
            }
            else{
                alert("Please enter email and password!");
            }
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
