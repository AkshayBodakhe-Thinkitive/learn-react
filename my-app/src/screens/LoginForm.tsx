import React, { useEffect, useState } from "react";
import InputBox from "../components/InputBox";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [data,setData] = useState<any>()

  const navigate = useNavigate();

  useEffect(() => {
    const dataFromLocaStorage:any = localStorage.getItem("formData")
    const info = JSON.parse(dataFromLocaStorage)
    setData(info)
  }, []);
   
  
  const loginFunction = () => {
     if(name == data.email && password == data.password){
      navigate('/home')
     } else{
       window.alert('You have entered wrong credentials!')
     }
  }

  return (
    <div
      style={{ border: "1px solid black", width: "300px", textAlign: "center" }}
    >
      <form>
        <InputBox
          label="email"
          placeholder="Enter your email"
          onChange={(e: any) => setName(e.target.value)}
        />
        <br />
        <InputBox
          label="password"
          placeholder="Enter your password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <br/>

        <button type="button" onClick={loginFunction}>Login</button>
      </form>
      <br />
    </div>
  );
};

export default LoginForm;
