import React from "react";
import HomeHeader from "./HomeHeader";
import "./Home.css";
import About from "./About";
import Benifits from "./Benifits";
import Counter from "./Counter";

function Home() {
  return (
    <div>
      <HomeHeader />
      <About />
      <Benifits />
      <Counter />
    </div>
  );
}

export default Home;
