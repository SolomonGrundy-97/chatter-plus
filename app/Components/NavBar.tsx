import React from "react";
import Image from "next/image";
import { FiAlignRight } from "react-icons/fi";
import { User } from "firebase/auth";

interface NavbarProps {
  user: User | null;
  mobileMenu: boolean;
  setMobileMenu: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, mobileMenu, setMobileMenu }) => {
  const toggleMenu = () => setMobileMenu((prev) => !prev);

  return (
    <div className="w-full bg-gray-800 p-4 text-white flex justify-between items-center fixed top-0 left-0 md:relative z-10">
      <div className=" items-center">
        <span
          role="img"
          aria-label="logo"
          className="text-white font-bold text-2xl"
        >
          Welcome to your dashboard! <span className="text-3xl mt-3">😊</span>
        </span>
        {user && (
          <div className="md:flex items-center">
            {user.photoURL && (
              <Image
                src={user.photoURL}
                alt="User Image"
                width={40}
                height={40}
                className="rounded-full mt-3"
              />
            )}
            <div className="flex flex-col text-right ml-10">
              <span className="text-white text-sm">( {user.email} )</span>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="block md:hidden text-purple-700 mb-3 font-bold"
          onClick={toggleMenu}
        >
          <FiAlignRight className="text-xl text-purple-700 mb-3" />.
        </button>
      </div>
    </div>
  );
};

export default Navbar;
