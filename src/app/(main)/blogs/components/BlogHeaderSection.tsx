import React from "react";
import { Button } from "@/components/ui/button";

export const BlogHeaderSection = () => {
  // Navigation menu items data
  const navItems = [
    { label: "Accueil", active: false },
    { label: "A propos", active: false },
    { label: "Services", active: false },
    { label: "Projets", active: false },
    { label: "Blog", active: true },
  ];

  return (
    <header className="w-full flex justify-between items-center py-10 px-16">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img className="w-[119px] h-[34px]" alt="Logo" src="/group-1.png" />
      </div>

      {/* Navigation Menu */}
      <nav className="flex items-center">
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <a
                href="#"
                className={`[font-family:'Raleway',Helvetica] text-white text-[17px] ${
                  item.active ? "font-bold" : "font-medium"
                }`}
              >
                {item.label}
              </a>
              {item.active && (
                <img
                  className="absolute w-6 h-0.5 top-[29px] left-0"
                  alt="Active indicator"
                  src="/line-1.svg"
                />
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Button */}
      <Button
        variant="ghost"
        className="[font-family:'Raleway',Helvetica] font-medium text-white text-[15px] rounded-[46px] shadow-[0px_0px_6px_#ffffff30] px-4 py-2"
      >
        Contact
      </Button>
    </header>
  );
};
