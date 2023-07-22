import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-black">
        <div className="sticky top-0">
          <Navbar />
        </div>

        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
