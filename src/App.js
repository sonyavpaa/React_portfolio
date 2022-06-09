import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LayOut from "./pages/LayOut";
import Home from "./components/Home";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
