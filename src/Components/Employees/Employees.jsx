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
      <div className="container container-workers">
        <h1 class="header header-employe">Nasi specjaliści</h1>
        {SectionMap}
      </div>
    </section>
  );
};
export default EmployerMap;
