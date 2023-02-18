import React from "react";
import Box from "./Box";
import { offerData } from "../../Data/offerData";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container container-offer">
        <h1 className="header-offer">Czym zajmuje się nasza firma?</h1>
        <div className="box-offer">
          {offerData.map((item, index) => (
            <Box key={index} isNew={item.isNew} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
