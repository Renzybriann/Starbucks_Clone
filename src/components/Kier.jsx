import React from "react";
import { SiStarbucks } from "react-icons/si";

function Kier() {
  return (
    <div className="bg-white text-sm h-24  font-sans font-bold flex drop-shadow-xl fixed top-0 left-0 w-screen">

      <div className="flex items-center space-x-4 flex-grow tracking-custom-wide ml-52 ">
        <SiStarbucks className="fill-green-900 w-12 h-12  mr-8 " />
        <div className="flex space-x-4 ">
          <div>MENU</div>
          <div>MERCHANDISE</div>
          <div>REWARDS</div>
        </div>
      </div>
 
      <div className="flex space-x-4 items-center mr-52">
        <div>Find store</div>
        <div className="font-bold border border-black rounded-full px-4 py-1 text-center">
          Sign in
        </div>
        <div className="bg-black text-white rounded-full px-4 py-1 text-center">
          Join Now
        </div>
      </div>
    </div>
  );
}

export default Kier;
