import Header from "./landingPage/landingPageFiles/Header";
import { Routes, Route } from "react-router-dom";
import AboutMePage from "./landingPage/AboutMePage";
import ProjectPage from "./landingPage/ProjectsPage";
import ContactPage from "./landingPage/ContactPage";
import HomePage from "./landingPage/HomePage";
import CatFactPage from "./landingPage/CatFactPage";
const LandingPage = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/cat-facts" element={<CatFactPage />} />
      </Routes>
    </>
  );
};

export default LandingPage;
