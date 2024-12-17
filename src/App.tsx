import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { ProcessSection } from "./components/ProcessSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { BlogSection } from "./components/BlogSection";
import { TechnicalToolsetSection } from "./components/TechnicalToolSection";
import { CareersSection } from "./components/CarrersSection";
import { ContactSection } from "./components/ContactSection";

const AppContainer = styled.div`
  font-family: "Avenir", sans-serif;
  background: linear-gradient(180deg, #1a0e20 0%, #010013 100%);
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection />
      <TechnicalToolsetSection />
      <CareersSection />
      <ContactSection />
    </AppContainer>
  );
}

export default App;
