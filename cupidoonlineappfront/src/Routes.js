import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./views/Home"

const AllRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes