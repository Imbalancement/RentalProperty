import React from "react";
import { Hero } from "../Components/Sections/hero";
import { About } from "../Components/Sections/about";
import { Residencies } from "../Components/Sections/Residencies/residencies";
import { Contact } from "../Components/Sections/contact";



export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Residencies />
      <Contact />
    </>
  );
};
