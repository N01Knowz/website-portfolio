import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div data-theme="synthwave" className="font-custom">
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
