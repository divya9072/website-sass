import React from "react";
import About from "./components/about";
import Header from "./components/header";
import Navbar from "./components/navbar";
import "./sass/main.scss";

function App() {
  return (
    <div >  
      <Navbar/>
      <Header/>
      <About/>
    </div>
  );
}

export default App;
