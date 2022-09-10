//Nav bar stuff going here

import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  
return (
<>
  <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
    <div>
      <span className="text-2xl font-[Poppins]">
        Pusi Urale
      </span>
     </div>

    <ul className="md:flex md:items-center z-[-1] md:z-auto ">
      <li className="mx-4 my-6 md:my-0">
        <button className="text-xl hover:text-cyan-500 duration-500">ABOUT</button>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <button className="text-xl hover:text-cyan-500 duration-500">EXHIBITIONS</button>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <button className="text-xl hover:text-cyan-500 duration-500">ARTICLES</button>
      </li>
      <li className="mx-4 my-6 md:my-0">  
        <button className="text-xl hover:text-cyan-500 duration-500">FOR SALE</button>
      </li>
    </ul>
  </nav>
</>
)
}

export default Nav
