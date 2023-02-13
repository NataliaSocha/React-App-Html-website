import React from "react";
import Navigation from "./Components/Nav";
import Header from "./Components/Header";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer";
import EmployerRen from "./Components/Employees/EmployerRen";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <EmployerRen />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
