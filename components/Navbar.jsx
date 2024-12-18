"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.avif" // Replace with your logo path
                alt="Logo"
                width={60}
                height={60}
                priority
              />
            </Link>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>

            <Link href="#" className="text-gray-600 hover:text-gray-800">
              Categories
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            Home
          </Link>

          <Link
            href="#"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            Categories
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            About
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
