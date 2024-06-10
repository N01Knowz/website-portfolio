import React from "react";

const NavBar = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-neutral/50 fixed w-full z-10 flex p-4 md:p-6 justify-center md:justify-between">
      <p className="hidden md:block text-xl">Portfolio</p>
      <ul className="flex justify-center gap-5 text-neutral-content md:text-xl">
        <li>
          <a
            href="#home"
            onClick={(e) => handleClick(e, "home")}
            className="hover:text-primary cursor-pointer"
          >
            Home
          </a>
        </li>
        <li className="md:hidden">
          <a
            href="#about"
            onClick={(e) => handleClick(e, "about")}
            className="hover:text-primary cursor-pointer"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={(e) => handleClick(e, "skills")}
            className="hover:text-primary cursor-pointer"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleClick(e, "projects")}
            className="hover:text-primary cursor-pointer"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "contact")}
            className="hover:text-primary cursor-pointer"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
