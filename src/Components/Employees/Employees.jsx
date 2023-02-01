import React from "react";
import EmployerData from "./EmployeesArray";
import EmployerLeftOrRight from "./EmployerList";

const EmployerMap = () => {
  const SectionMap = EmployerData.map(
    ({ nameEmployer, img, department, description }, index) => (
      <EmployerLeftOrRight
        key={index}
        img={img}
        index={index}
        nameEmployer={nameEmployer}
        department={department}
        description={description}
      ></EmployerLeftOrRight>
    )
  );
  return (
    <section className="about-us">
      <a name="about">o nas</a>
      <div className="container container-workers">
        <h1 className="header header-employe">Nasi specjaliści</h1>
        {SectionMap}
      </div>
    </section>
  );
};
export default EmployerMap;
