import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </MainLayout>
  );
};

export default Home;
