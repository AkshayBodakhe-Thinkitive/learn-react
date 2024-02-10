import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegistrationForm from "./screens/RegistrationForm";
import LoginForm from "./screens/LoginForm";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div style={{ padding: 10 }}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
