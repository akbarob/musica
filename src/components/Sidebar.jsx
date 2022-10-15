import React from "react";
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
// import { IoLogOut } from "react-icons/io5";

import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", to: "/", icon: Home },
  { name: "Library", to: "Musica-Library", icon: Playlist },
  { name: "Radio", to: "Radio", icon: Radio },
  { name: "Video", to: "Video", icon: Videos },
];
const user = [
  { name: "Profile", to: "#", icon: Profile },
  { name: "Logout", to: "#", icon: Logout },
];

// const NavLinks = () => {
//   <div>
//     {links.map((item) => (
//       <NavLink
//         key={item.name}
//         to={item.to}
//         className="bg-black flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
//       >
//         <img src={item.icon} alt={item.name} />
//         {item.name}
//       </NavLink>
//     ))}
//   </div>;
// };

const NavLinks = () => <div></div>;
export default function Sidebar() {
  return (
    <div className="flex flex-col py-10 px-4 bg-red-500 h-screen">
      <div>
        <img src={logo} alt="musica_logo" />
      </div>
      <div className="bg-amber-800  rounded-[32px] mt-10 h-[230px] w-[52px] flex flex-col justify-evenly items-center">
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
      <div className="bg-amber-800  rounded-[32px] mt-10 h-[127px] w-[52px] flex flex-col justify-evenly items-center">
        {user.map((item) => (
          <NavLink key={item.name}>
            <img src={item.icon} alt={item.name} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
