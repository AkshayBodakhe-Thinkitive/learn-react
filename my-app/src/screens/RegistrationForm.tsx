import React, { useState } from "react";
import "./RegForm.css";
import InputBox from "../components/InputBox";
import { Link } from "react-router-dom";


const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");


  const submitForm = () => {
    if (name !== "" && email !== "" && mobile !== "" && password !== "") {
      const formData = {
        name,
        email,
        mobile,
        password,
      };
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  };

  return (
    <div className="form-container">
      <h1 style={{ textAlign: "center" }}>Registration Form</h1>
      <form>
        <InputBox
          label="Name"
          placeholder="Enter Your Name"
          onChange={(e: any) => setName(e.target.value)}
        />

        <br />
        <InputBox
          label="Email"
          placeholder="Enter Your Email"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <br />
        <InputBox
          label="mobile"
          placeholder="Enter Your Mobile"
          onChange={(e: any) => setMobile(e.target.value)}
        />
        <br />
        <InputBox
          type="password"
          label="password"
          placeholder="Enter Your Password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <br />

        <Link to={"/login"}>
          <input type="submit" value={"submit"} onClick={submitForm} />
        </Link>
      </form>
    </div>
  );
};

export default RegistrationForm;
