import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
const SmallNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>  <div
    className={`flex w-full space-y-2    flex-col items-center justify-between sm:hidden bg-blue-50 transition-all duration-500 ${
      isNavOpen ? `block` : `hidden`
    } `}
  >
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/Services"}>Services</NavLink>
    <NavLink to={"/Blog"}>Blog</NavLink>
    <NavLink to={"/About"}>About Us</NavLink>
  </div></div>
  )
}

export default SmallNav