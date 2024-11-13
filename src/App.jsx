import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import ApplicationForm from "./components/ApplicationForm";

const App = () => {
  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/ApplicationForm" element={<ApplicationForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
