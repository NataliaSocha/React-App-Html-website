import React from "react";
import Navigation from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Services from "./Services/Services";
import Footer from "./Components/Footer/Footer";
import Employees from "./Components/Employees/Employees";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Employees />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
