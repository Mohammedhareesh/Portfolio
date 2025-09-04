import React from "react";
import Hero from "../components/sections/hero";
import Resume from '../components/sections/resume'
import Portfolio from "../components/sections/portfolio";

const Home = () => {
  return (
    <>
      <Hero />
      <Resume hideEducation={true}/>
      <Portfolio />
    </>
  );
};

export default Home;
