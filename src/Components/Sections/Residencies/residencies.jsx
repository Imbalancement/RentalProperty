import React from "react";
import "./residencies.css";
import { Carousel } from "./components/Carousel";
import { slides } from "./data/carouselData.json";

export const Residencies = () => {
  return (
    <section id="residencies">
      <div className=" property">
        <div>
          <h1>
            Available Properties</h1>
        </div>

        <div>
          <Carousel data={slides} />
        </div>
      </div>
    </section>
  );
};
