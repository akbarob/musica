import React, { useState } from "react";
import {
  logo,
  Home,
  Playlist,
  Radio,
  Videos,
  Profile,
  Logout,
} from "../assets";
import Home1 from "../assets/Home-1.svg";

// import { HiUser } from "react-icons/hi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import { NavLink } from "react-router-dom";
{
  ({ isActive }) => (isActive ? activeClassName : undefined);
}

const links = [
  {
    name: "Home",
    to: "/",
    icon: Home,
  },
  { name: "Library", to: "Musica-Library", icon: Playlist },
  { name: "Radio", to: "Radio", icon: Radio },
  { name: "Video", to: "Video", icon: Videos },
];
const user = [
  { name: "Profile", to: "#", icon: Profile },
  { name: "Logout", to: "#", icon: Logout },
];
const mobilelinks = [
  { name: "Home", to: "/", icon: Home },
  { name: "Library", to: "Musica-Library", icon: Playlist },
  { name: "Radio", to: "Radio", icon: Radio },
  { name: "Video", to: "Video", icon: Videos },
  { name: "Profile", to: "#", icon: Profile },
  { name: "Logout", to: "#", icon: Logout },
];

const NavLinks = () => <div></div>;
export default function Sidebar() {
  const [MobileOpen, setMobileOpen] = useState(false);
  const ToggleMenu = () => {
    setMobileOpen(!MobileOpen);
  };
  return (
    <div className="">
      <div className="hidden md:flex flex-col py-10 px-4 bg-[#1E1E1E] h-screen">
        <div>
          <img src={logo} alt="musica_logo" />
        </div>
        <div className="bg-[#1A1E1F]  rounded-[32px] mt-10 h-[230px] w-[52px] flex flex-col justify-evenly items-center">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="flex flex-col justify-between items-center"
            >
              <img
                src={item.icon}
                className="fill-red-600 text-yellow-700 w-6 hover:text-cyan-400 hover:fill-orange-600 "
                alt="icon "
              />
            </NavLink>
          ))}{" "}
        </div>
        <div className="bg-[#1A1E1F]  rounded-[32px] mt-10 h-[127px] w-[52px] flex flex-col justify-evenly items-center">
          {user.map((item) => (
            <NavLink key={item.name}>
              <img src={item.icon} alt={item.name} />
            </NavLink>
          ))}
        </div>
      </div>
      <div className="absolute md:hidden block top-6 left-3 z-10">
        <HiOutlineMenuAlt4
          className="w-6 h-6 text-white mr-2 cursor-pointer"
          onClick={() => setMobileOpen(!MobileOpen)}
        />
      </div>
      {/* mobileMenu */}
      {MobileOpen ? (
        <div className="absolute bg-[#1A1E1F] z-50 w-2/3 h-screen pt-6">
          <HiOutlineMenuAlt4
            className="w-6 h-6 text-white mr-2 cursor-pointer ml-3"
            onClick={() => setMobileOpen(!MobileOpen)}
          />
          {mobilelinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="flex flex-col my-12 items-start"
            >
              <div className="flex pl-8">
                <img
                  src={item.icon}
                  className="fill-red-600 text-yellow-700 w-6 hover:text-cyan-400 hover:fill-orange-600 "
                  alt="icon "
                />
                <p className="text-lg text-white ml-4">{item.name}</p>
              </div>
            </NavLink>
          ))}{" "}
        </div>
      ) : null}
    </div>
  );
}
