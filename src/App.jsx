import "./App.css";

import HomeSection from "./pages/HomeSection";
import AboutMeSection from "./pages/AboutMeSection";
import ProjectsSection from "./pages/ProjectsSection";
import ContactSection from "./pages/ContactSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <section className="container">
        <HomeSection />
        <AboutMeSection />
        <ProjectsSection />
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
