import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "./NavBar";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Content container */}
      <div className="h-full flex flex-col justify-center bg-[url('/assets/images/img1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 w-full h-full [background:linear-gradient(133deg,rgba(24,32,48,0.8)_0%,rgba(31,51,89,0.8)_100%)]" />
        <div className="z-10 px-4 sm:px-8 md:px-12 lg:px-18 h-full flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Investissez Dans
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#d99541] leading-tight mt-1 sm:mt-2">
            L&apos;immobilier D&apos;exception
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-1 sm:mt-2 mb-3 sm:mb-6">
            Avec Fulser Properties !
          </h3>

          <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 md:mb-10">
            Des solutions sur mesure pour l&apos;achat, la vente et la gestion
            de biens immobiliers.
          </p>

          <a
            href="#projects"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#d99541] text-white font-medium rounded-full hover:bg-[#c78530] transition-colors w-fit text-sm sm:text-base"
          >
            DÉCOUVRIR NOS PROJETS
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
