import React from "react";

const NavBar = () => {
  return (
    <div className="bg-neutral/50 fixed w-full">
      <ul className="flex justify-center gap-5 p-4 text-neutral-content">
        <li className="hover:text-info cursor-pointer">Home</li>
        <li className="hover:text-info cursor-pointer">About</li>
        <li className="hover:text-info cursor-pointer">Skills</li>
        {/* <li className="hover:text-info cursor-pointer">Services</li> */}
        <li className="hover:text-info cursor-pointer">Projects</li>
        <li className="hover:text-info cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
