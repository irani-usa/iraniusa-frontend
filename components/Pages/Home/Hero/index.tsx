import React from "react";
import Title from "./Title";
import Search from "./Search";
import Feature from "./Feature";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container">
      <Title />
      <Search />
      <Feature />
    </section>
  );
};

export default Hero;
