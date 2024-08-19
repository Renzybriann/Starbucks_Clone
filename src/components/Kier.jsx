import React from "react";
import { SiStarbucks } from "react-icons/si";

function Kier() {
  return (
    <div className="bg-white text-sm h-24 font-sans font-bold flex drop-shadow-xl fixed top-0 left-0 w-full px-4 md:px-8 lg:px-16">
      {/* Logo and Navigation */}
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4 flex-grow tracking-custom-wide">
          <SiStarbucks className="fill-green-900 w-10 h-10 md:w-12 md:h-12" />
          <div className="hidden md:flex space-x-4">
            <div>MENU</div>
            <div>MERCHANDISE</div>
            <div>REWARDS</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">Find store</div>
          <div className="hidden md:flex font-bold border border-black rounded-full px-4 py-1 text-center">
            Sign in
          </div>
          <div className="bg-black text-white rounded-full px-4 py-1 text-center">
            Join Now
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle (Optional) */}
      <div className="md:hidden flex items-center space-x-2 mt-2">
        <button className="text-lg">☰</button>
        <div className="text-lg">Menu</div>
      </div>
    </div>
  );
}

export default Kier;
