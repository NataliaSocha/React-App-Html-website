import Navigation from "./Components/Nav";
import Header from "./Components/Header";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer";
import EmployerMap from "./Components/Employees/Employees";

function App() {


  return (
    <div className="App">
      <Navigation />
      <Header />
      <EmployerMap/>
      <Services />
      <Footer />
    </div>
  );
}

export default App;