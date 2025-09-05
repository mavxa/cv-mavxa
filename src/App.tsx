import "./App.css";

// import components
import PreviewSection from "./components/PreviewSection";
import TextAnimate from "./components/TextAnimate";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";

function App() {
  return (
    <div className="app">
      <PreviewSection />

      <TextAnimate />

      <AboutSection />

      <ProjectsSection />

      <EducationSection />
    </div>
  );
}

export default App;
