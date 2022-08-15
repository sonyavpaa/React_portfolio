import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LayOut from "./pages/LayOut";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />}></Route>
          {/* <Route path="catchingluv" element={<CatchingLuv />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
