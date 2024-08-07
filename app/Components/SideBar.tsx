"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
import { MdOutlineDrafts, MdCreate, MdFeed } from "react-icons/md";
// import {LiaBlogSolid} from 'react-icons/lia';
import { IoAnalyticsSharp, IoLogOut } from "react-icons/io5";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

const Sidebar = ({ mobileMenu, setMobileMenu }: any) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {(mobileMenu || screenWidth > 768) && (
        <div className="w-64 h-100 bg-gray-800 text-white p-4 fixed md:relative z-20 md:z-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center mb-5">
              <i className="fi fi-sr-comment-quote text-2xl"></i>
              <span
                role="img"
                aria-label="logo"
                className="text-white text-3xl"
              >
                🏀
              </span>
              <span className="ml-2 text-xl font-bold">Chatter+</span>
            </div>
            <button
              className="block md:hidden text-purple-700"
              onClick={() => setMobileMenu(false)}
            >
              .<i className="fi fi-rr-cross text-xl"></i>
            </button>
          </div>

          <ul>
            <GrOverview size={25} className="mx-1 text-purple-700" />
            <h4 className="font-semibold text-gray-400 mb-2">Overview</h4>
            <li className="mb-5">
              <Link
                href="/dashboard/feed"
                className="flex items-center p-2 rounded hover:bg-gray-700"
                onClick={() => setMobileMenu(false)}
              >
                <MdFeed size={25} className="mx-1 text-purple-700" />
                Feeds
              </Link>
            </li>
            <li className="mb-5">
              <Link
                href="/dashboard/create-content"
                className="flex items-center p-2 rounded hover:bg-gray-700"
                onClick={() => setMobileMenu(false)}
              >
                <MdCreate size={25} className="mx-1 text-purple-700" />
                Create content
              </Link>
            </li>
            <li className="mb-5">
              <Link
                href="/dashboard/editpost"
                className="flex items-center p-2 rounded hover:bg-gray-700"
                onClick={() => setMobileMenu(false)}
              >
                <FaRegBookmark size={25} className="mx-1 text-purple-700" />
                Bookmarks
              </Link>
            </li>
            <li className="mb-5">
              <Link
                href="/dashboard/analytics"
                className="flex items-center p-2 rounded hover:bg-gray-700 mb-5"
                onClick={() => setMobileMenu(false)}
              >
                <IoAnalyticsSharp size={25} className="mx-1 text-purple-700" />
                Analytics
              </Link>
              <Link
                href="/dashboard/empty-page"
                className="flex items-center p-2 rounded hover:bg-gray-700 mb-5"
                onClick={() => setMobileMenu(false)}
              >
                <MdOutlineDrafts size={25} className="mx-1 text-purple-700" />
                Drafts
              </Link>
            </li>
            <li className="mt-5" onClick={() => signOut(auth)}>
              <Link
                href="/"
                className="flex items-center p-2 rounded hover:bg-gray-700 text-red-700"
                onClick={() => setMobileMenu(false)}
              >
                <IoLogOut size={35} className="mx-1" />
                Log out
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
