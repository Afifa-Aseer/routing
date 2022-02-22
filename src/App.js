import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";

function App(){
  return(
  <>  
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<h1>PAGE NOT FOUND 404</h1>} />
      </Routes>
  </>
  )
}
export default App;
