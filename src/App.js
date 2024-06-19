import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";

function App() {
  return (
    <>
      {/* <h3> this is with using prop types</h3> */}
      <Navbar title="TextUtils" aboutText="About us" />
      <div className="container">
        <TextForm heading="Enter the text to analyze" />
      </div>
      <div className="container">
        <About />
      </div>
    </>
  );
}

export default App;
