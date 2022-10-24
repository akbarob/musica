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

// import { HiUser } from "react-icons/hi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import { NavLink } from "react-router-dom";
{
  ({ isActive }) => (isActive ? activeClassName : undefined);
}

const links = [
  { name: "Home", to: "/home", icon: Home },

  { name: "Library", to: "Collections", icon: Playlist },
  { name: "Radio", to: "//", icon: Radio },
  { name: "Video", to: "//", icon: Videos },
];
const user = [
  { name: "Profile", to: "//", icon: Profile },
  { name: "Logout", to: "//", icon: Logout },
];
const mobilelinks = [
  { name: "Home", to: "home", icon: Home },
  { name: "Library", to: "Collections", icon: Playlist },
  { name: "Radio", to: "//", icon: Radio },
  { name: "Video", to: "//", icon: Videos },
  { name: "Profile", to: "//", icon: Profile },
  { name: "Logout", to: "//", icon: Logout },
];

const NavLinks = () => <div></div>;
export default function Sidebar() {
  const [MobileOpen, setMobileOpen] = useState(false);
  const ToggleMenu = () => {
    setMobileOpen(!MobileOpen);
  };
  let activeClassName = "fill-[#FACD66]";

  return (
    <div className="">
      <div className=" absolute hidden md:flex flex-col py-10 h-screen z-30 px-4 backdrop-blur-xs pr-5">
        <div className="justify-center">
          <img src={logo} alt="musica_logo" />
        </div>
        <div className="bg-[#1A1E1F]  rounded-[32px] mt-10 h-[230px] w-[52px] flex flex-col justify-evenly items-center">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="flex flex-col justify-between items-center"
            >
              {({ isActive }) => (
                <item.icon
                  className={`${
                    isActive ? activeClassName : "fill-[#EFEEE0]/25"
                  } hover:fill-[#FACD66]`}
                />
              )}
            </NavLink>
          ))}
        </div>
        <div className="bg-[#1A1E1F] rounded-[32px] mt-10 h-[127px] w-[52px] flex flex-col justify-evenly items-center">
          {user.map((item) => (
            <NavLink key={item.name}>
              <item.icon className="fill-[#EFEEE0]/25 hover:fill-[#FACD66]" />{" "}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="absolute md:hidden block top-6 left-3 z-30">
        <div className="flex flex-row w-full justify-between">
          <HiOutlineMenuAlt4
            className="w-6 h-6 text-white mr-2 cursor-pointer "
            onClick={() => setMobileOpen(!MobileOpen)}
          />

          <div className="flex justify-between ml-6">
            <img src={logo} alt="musica_logo" />
          </div>
        </div>
      </div>
      {/* mobileMenu */}
      {MobileOpen ? (
        <div className="absolute md:hidden bg-[#1A1E1F] z-50 w-2/3 h-screen pt-6">
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
              <div
                className="flex pl-8 text-white hover:text-[#FACD66] "
                onClick={() => setMobileOpen(!MobileOpen)}
              >
                <item.icon className="fill-[#EFEEE0]/25 hover:fill-[#FACD66]" />
                <p className="text-lg  ml-4">{item.name}</p>
              </div>
            </NavLink>
          ))}{" "}
        </div>
      ) : null}
    </div>
  );
}
