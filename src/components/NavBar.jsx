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
    <div className="bg-neutral/50 fixed w-full">
      <ul className="flex justify-center gap-5 p-4 text-neutral-content">
        <li>
          <a
            href="#home"
            onClick={(e) => handleClick(e, "home")}
            className="hover:text-info cursor-pointer"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => handleClick(e, "about")}
            className="hover:text-info cursor-pointer"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={(e) => handleClick(e, "skills")}
            className="hover:text-info cursor-pointer"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleClick(e, "projects")}
            className="hover:text-info cursor-pointer"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "contact")}
            className="hover:text-info cursor-pointer"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
