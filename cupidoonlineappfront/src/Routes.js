import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./views/Home"
import Login from "./views/Login"
import Signup from "./views/Signup"

const AllRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes