import React from "react";
import { Link } from "react-scroll";
import contact from "../../src/Asset/Contact.png";

function Nav() {
  return (
    <nav className=" max-w-[83rem] mx-auto my-0 h-[5rem] w-screen flex justify-between items-center sticky top-0 px-[3rem] py-[2rem] z-[3]">
      <img className="h-[3rem] w-[4rem] object-cover" src="./jey.png" alt="" />
      <div>
        <Link className="m-[1rem] cursor-pointer hover:text-yellow-500 hover:border-b-[3px] hover:border-yellow-500 hover:pb-[0.5rem]">
          Home{" "}
        </Link>
        <Link className="m-[1rem] cursor-pointer  hover:text-yellow-500 hover:border-b-[3px] hover:border-yellow-500 hover:pb-[0.5rem]">
          About
        </Link>
        <Link className="m-[1rem] cursor-pointer  hover:text-yellow-500 hover:border-b-[3px] hover:border-yellow-500 hover:pb-[0.5rem]">
          Portfolio
        </Link>
      </div>
      <button className=" border-[none] flex justify-center items-center bg-white text-black rounded-[2rem] py-0 px-[1rem]">
        <img
          className="h-[1rem] w-[1rem] object-cover m-[1rem]"
          src={contact}
          alt=""
        />
        Contact me
      </button>
    </nav>
  );
}

export default Nav;
