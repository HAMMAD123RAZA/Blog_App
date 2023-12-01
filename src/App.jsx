import React from "react";
import "./App.css";
import Post from "./Post";
import Header from "./Header";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import Indexpage from "./pages/Indexpage";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return ( 
    <>
    <Layout/>
      <Routes>
      {/* <Route path="/" element={<Layout/>} /> */}
      <Route index element={<Indexpage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
};

export default App;
