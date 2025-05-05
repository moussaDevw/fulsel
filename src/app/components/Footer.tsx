"use client";
import { Facebook, Instagram, Linkedin, Twitter, SendIcon } from "lucide-react";
import React from "react";
import { Separator } from "../../components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}
export const Footer = ({ className = "mt-10" }: FooterProps) => {
  const pathname = usePathname();
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Menu items data
  const footerMenus = {
    menu: [
      { name: "Accueil", link: "/" },
      { name: "A propos", link: "/a-propos" },
      { name: "Services", link: "/services" },
      { name: "Projets", link: "/projets" },
      // { name: "Blog", link: "/blogs" },
    ],
    services: [
      { name: "Recherche de foncier", link: "/services/1" },
      { name: "Élaboration du projet", link: "/services/2" },
      { name: "Commercialisation", link: "/services/3" },
      { name: "Suivi des travaux", link: "/services/4" },
      { name: "Gestion immobilière", link: "/services/5" },
    ],
  };

  // Fonction pour vérifier si un lien est actif
  const isActive = (link: string) => {
    if (link === "/" && pathname === "/") return true;
    if (link !== "/" && (pathname === link || pathname.startsWith(`${link}/`)))
      return true;
    return false;
  };

  // Fonction pour gérer la soumission du formulaire de newsletter
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simuler un appel API
    setTimeout(() => {
      console.log("Email soumis:", email);
      setEmail("");
      setIsSubmitting(false);
      alert("Merci pour votre inscription à notre newsletter!");
    }, 1000);
  };

  return (
    <footer className={cn("relative w-full bg-[#1f3359]", className)}>
      <div className="absolute inset-0 w-full h-full bg-[url(/assets/images/iconBg.png)] opacity-12 pointer-events-none" />
      <div className="relative max-w-[1309px] mx-auto px-4 py-12 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and Contact */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center">
              <img
                className="mr-4 h-12 w-auto"
                alt="Logo"
                src="/assets/svgs/logo.svg"
              />
              <div>
                <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold">
                  FULSER
                </h1>
                <p className="text-[#D99541] text-xs md:text-sm font-normal uppercase tracking-widest">
                  PROPERTIES
                </p>
              </div>
            </Link>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-raleway font-bold text-white text-base tracking-wide">
                  TÉLÉPHONE
                </h3>
                <p className="font-raleway font-normal text-[#ffffffba] text-sm mt-2">
                  +221 78 434 80 80
                </p>
              </div>

              <div>
                <h3 className="font-raleway font-bold text-white text-base tracking-wide">
                  EMAIL :
                </h3>
                <p className="font-raleway font-normal text-[#ffffffba] text-sm mt-2">
                  contact@fulserproperties.com
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-raleway font-bold text-white text-base tracking-wide">
                  ADRESSE
                </h3>
                <p className="font-raleway font-normal text-[#ffffffba] text-sm mt-2">
                  Dakar, Sénégal
                </p>
              </div>
            </div>

            <Separator className="w-full max-w-xs mt-6 bg-[#ffffff75]" />

            <div className="flex space-x-3 mt-6">
              {[
                {
                  icon: Facebook,
                  name: "Facebook",
                  link: "https://facebook.com",
                },
                {
                  icon: Instagram,
                  name: "Instagram",
                  link: "https://instagram.com",
                },
                {
                  icon: Linkedin,
                  name: "LinkedIn",
                  link: "https://linkedin.com",
                },
                { icon: Twitter, name: "Twitter", link: "https://twitter.com" },
              ].map(({ icon: Icon, name, link }, index) => (
                <Link
                  href={link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 bg-[#172747] rounded-full border border-solid border-[#d99541] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#d99541]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between gap-8">
            {/* Menu Column */}
            <div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-md bg-[#d99541]" />
                <h3 className="font-raleway font-bold text-white text-xl tracking-wide ml-2">
                  MENU
                </h3>
              </div>

              <ul className="mt-6 space-y-4">
                {footerMenus.menu.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <img
                      className="w-2 h-4 mr-2"
                      alt="Arrow"
                      src="/assets/svgs/arrow.svg"
                    />
                    <Link
                      href={item.link}
                      className={`font-raleway font-medium text-base tracking-wide ${
                        isActive(item.link) ? "text-[#d99541]" : "text-white"
                      } hover:text-[#d99541] transition-colors duration-200`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-md bg-[#d99541]" />
                <h3 className="font-raleway font-bold text-white text-xl tracking-wide ml-2">
                  SERVICES
                </h3>
              </div>

              <ul className="mt-6 space-y-4">
                {footerMenus.services.map((item, index) => (
                  <li key={index} className="flex items-center cursor-pointer">
                    <img
                      className="w-2 h-4 mr-2"
                      alt="Arrow"
                      src="/assets/svgs/arrow.svg"
                    />
                    <Link
                      href={item.link}
                      className={`font-raleway font-medium cursor-pointer ${
                        isActive(item.link) ? "text-[#d99541]" : "text-white"
                      } text-base tracking-wide hover:text-[#d99541] transition-colors duration-200`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:justify-self-end">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-md bg-[#d99541]" />
              <h3 className="font-raleway font-bold text-white text-xl tracking-wide ml-2">
                GARDEZ LE CONTACT
              </h3>
            </div>

            <p className="font-raleway font-normal text-white text-base leading-7 mt-6 max-w-xs">
              Inscrivez-vous à nos dernières actualités et articles. Nous ne
              vous enverrons pas de spam ni de messages non pertinents.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="mt-6">
              <div className="w-full max-w-xs h-14 bg-[#172747] rounded-md border border-solid border-[#ffffff75] flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Adresse Email"
                  required
                  className="flex-1 px-4 bg-transparent font-raleway font-normal text-white text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-14 h-14 bg-[#d99541] rounded-r-md flex items-center justify-center cursor-pointer hover:bg-[#c78530] transition-colors duration-200 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <img
                      className="w-6 h-6"
                      alt="Send"
                      src="/assets/svgs/envelop.svg"
                    />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <Separator className="w-full mt-16 bg-[#ffffff75]" />

        <div className="text-center mt-10 pb-6">
          <p className="font-raleway font-normal text-white text-sm tracking-wide">
            © Copyright 2025. Tous droits réservés Fulser. Designed by xaran
            tech
          </p>
        </div>
      </div>
    </footer>
  );
};
