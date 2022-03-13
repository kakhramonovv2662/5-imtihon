import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

//scss
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about/:postId" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
