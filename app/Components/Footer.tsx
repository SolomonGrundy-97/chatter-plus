"use client";
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span
                role="img"
                aria-label="logo"
                className="text-white text-3xl mb-2"
              >
                🏀
              </span>
              <h2 className="text-2xl font-bold mb-2  mx-2" role="banner">
                Chatter+
              </h2>
            </div>
            <p className="text-gray-400">
              Chatter+ is a multi-functional platform for authors and readers to
              engage with text-based content. Join us and be part of a vibrant
              community.
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mb-6 md:mb-0 md:mr-12">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:text-gray-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:text-gray-300">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://twitter.com"
                    className="hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    className="hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    className="hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    className="hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Chatter+. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
