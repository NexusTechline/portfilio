"use client";
import React, { useState } from "react";
import Container from "./Container";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Lists = ["Home", "About", "TechStack", "Project", "Contact"];

  return (
    <header className="sticky top-0 w-full bg-[#1A0B2E] z-50 shadow-sm p-4 md:p-6 lg:p-8 backdrop-blur-lg">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={"/S.svg"}
              alt="Logo"
              width={35}
              height={35}
              className="text-purple-500"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {Lists.map((list, index) => (
              <Link
                key={index}
                href={`#${list.toLowerCase()}`}
                className="text-gray-300 hover:text-purple-400 transition-colors relative group"
              >
                {list}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <RxCross1 size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#1A0B2E] border-t border-gray-800">
            <nav className="flex flex-col items-center py-4 gap-4">
              {Lists.map((list, index) => (
                <Link
                  key={index}
                  href={`#${list.toLowerCase()}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {list}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
