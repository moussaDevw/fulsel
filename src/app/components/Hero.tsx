"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "./NavBar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const goToProjects = () => {
    router.push("/projets");
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Content container */}
      <div className="h-full flex flex-col justify-center bg-[url('/assets/images/img1.jpg')] bg-cover bg-center">
        <div
          className={`absolute inset-0 w-full h-full [background:linear-gradient(133deg,rgba(24,32,48,0.8)_0%,rgba(31,51,89,0.8)_100%)] transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="container z-10 md:mt-20 h-full flex flex-col justify-center">
          <h1
            className={`text-3xl sm:text-4xl lg:text-3xl xl:text-6xl font-extrabold text-white leading-tight transform transition-all duration-1000 ease-out ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Investissez dans
          </h1>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#d99541] leading-tight mt-1 sm:mt-2 transform transition-all duration-1000 ease-out ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            l&apos;immobilier d&apos;exception
          </h2>

          <h3
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-1 sm:mt-2 mb-3 sm:mb-6 transform transition-all duration-1000 ease-out ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            avec Fulser Properties !
          </h3>

          <p
            className={`text-white text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 md:mb-10 transform transition-all duration-1000 ease-out ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "1.1s" }}
          >
            Des solutions sur mesure pour l&apos;achat, la vente et la gestion
            de biens immobiliers.
          </p>

          <button
            onClick={goToProjects}
            className={`inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#d99541] text-white font-medium rounded-full hover:bg-[#c78530] transition-all duration-300 w-fit text-sm sm:text-base cursor-pointer group hover:scale-105 hover:shadow-lg transform ${
              isLoaded
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-12 opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "1.4s" }}
          >
            DÉCOUVRIR NOS PROJETS
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(217, 149, 65, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(217, 149, 65, 0.6),
              0 0 30px rgba(217, 149, 65, 0.4);
          }
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
