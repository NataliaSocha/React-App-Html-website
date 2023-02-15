import React from "react";
import EmployerData from "../../Data/EmployerData";
import EmployerLeftOrRight from "./EmployerLeftOrRight";

const Employees = () => {
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
    <section id="about-us" className="about-us">
      <div className="container container-workers">
        <h1 className="header header-employe">Nasi specjaliści</h1>
        {SectionMap}
      </div>
    </section>
  );
};
export default Employees;
