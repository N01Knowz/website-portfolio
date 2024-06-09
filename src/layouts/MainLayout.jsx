import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const MainLayout = ({ children }) => {
  const { theme } = useParams();
  return (
    <>
      <div data-theme={theme ? theme : "dracula"} className="font-lato">
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default MainLayout;
