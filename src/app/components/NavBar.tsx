"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full mx-auto fixed top-0 md:py-7 text-2xl left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#1F3359]/95 shadow-md py-2"
          : "bg-white md:bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-8 pr-2">
              <img
                src="/assets/svgs/logo.svg"
                alt="Logo"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold leading-none ${
                  isScrolled ? "text-white" : "text-[#1F3359] md:text-white"
                }`}
              >
                Fulser
              </span>
              <span
                className={`text-xs tracking-widest ${
                  isScrolled ? "text-[#D99541]" : "text-[#D99541] md:text-white"
                }`}
              >
                PROPERTIES
              </span>
            </div>
          </Link>

          {/* Menu Hamburger (mobile) */}
          <button
            className={`lg:hidden transition-transform duration-300 ease-in-out ${
              isScrolled ? "text-white" : "text-[#172747] md:text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu principal"
          >
            <div className="relative w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 absolute top-0 left-0 transition-opacity duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 absolute top-0 left-0 transition-opacity duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-100" : "opacity-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link
              href="/"
              className={`text-white relative ${
                pathname === "/"
                  ? "after:absolute after:w-1/2 after:h-0.5 after:bg-[#D99541] after:bottom-0 after:left-0"
                  : ""
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/a-propos"
              className={`text-white relative ${
                pathname === "/a-propos"
                  ? "after:absolute after:w-1/2 after:h-0.5 after:bg-[#D99541] after:bottom-0 after:left-0"
                  : ""
              }`}
            >
              A Propos
            </Link>
            <Link
              href="/services"
              className={`text-white relative ${
                pathname === "/services" || pathname.startsWith("/services/")
                  ? "after:absolute after:w-1/2 after:h-0.5 after:bg-[#D99541] after:bottom-0 after:left-0"
                  : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/projets"
              className={`text-white relative ${
                pathname === "/projets" || pathname.startsWith("/projets/")
                  ? "after:absolute after:w-1/2 after:h-0.5 after:bg-[#D99541] after:bottom-0 after:left-0"
                  : ""
              }`}
            >
              Projet
            </Link>
            {/* <Link
              href="/blogs"
              className={`text-white relative ${
                pathname === "/blogs" || pathname.startsWith("/blogs/")
                  ? "after:absolute after:w-1/2 after:h-0.5 after:bg-[#D99541] after:bottom-0 after:left-0"
                  : ""
              }`}
            >
              Blog
            </Link> */}
          </div>

          {/* Contact Button */}
          <Button
            onClick={() => router.push("/contact")}
            className="hidden lg:block h-[50px] bg-[#d99541] hover:bg-[#c78530] text-white rounded-full cursor-pointer"
          >
            Contact
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="bg-black/90 p-4 rounded-lg transform transition-transform duration-300 ease-in-out">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className={`text-white transition-all duration-200 ${
                  pathname === "/"
                    ? "border-l-4 border-[#d99541] pl-2"
                    : "pl-2 hover:border-l-4 hover:border-[#d99541]/50 hover:pl-2"
                }`}
              >
                Accueil
              </Link>
              <Link
                href="/a-propos"
                className={`text-white transition-all duration-200 ${
                  pathname === "/a-propos"
                    ? "border-l-4 border-[#d99541] pl-2"
                    : "pl-2 hover:border-l-4 hover:border-[#d99541]/50 hover:pl-2"
                }`}
              >
                A Propos
              </Link>
              <Link
                href="/services"
                className={`text-white transition-all duration-200 ${
                  pathname === "/services"
                    ? "border-l-4 border-[#d99541] pl-2"
                    : "pl-2 hover:border-l-4 hover:border-[#d99541]/50 hover:pl-2"
                }`}
              >
                Services
              </Link>
              <Link
                href="/projets"
                className={`text-white transition-all duration-200 ${
                  pathname === "/projets"
                    ? "border-l-4 border-[#d99541] pl-2"
                    : "pl-2 hover:border-l-4 hover:border-[#d99541]/50 hover:pl-2"
                }`}
              >
                Projets
              </Link>
              {/* <Link
                href="/blogs"
                className={`text-white transition-all duration-200 ${
                  pathname === "/blogs" || pathname.startsWith("/blogs/")
                    ? "border-l-4 border-[#d99541] pl-2"
                    : "pl-2 hover:border-l-4 hover:border-[#d99541]/50 hover:pl-2"
                }`}
              >
                Blog
              </Link> */}
              <Button
                onClick={() => router.push("/contact")}
                className="bg-[#d99541] hover:bg-[#c78530] text-white rounded-full w-full transition-colors duration-300"
              >
                Contact
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
