import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { Footer } from "@/app/components/Footer";
const contactCards = [
  {
    title: "TÉLÉPHONE",
    content: "+221 77 777 77 77",
    icon: Phone,
  },
  {
    title: "ADRESSE COURRIEL",
    content: "contact@fulser.com",
    icon: Mail,
  },
  {
    title: "ADRESSE",
    content: "Dakar, Sénégal",
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        <HeroSection
          title="Contact"
          breadcrumbs={[
            { label: "Accueil", link: "/" },
            { label: "Contact", link: "/contact", isActive: true },
          ]}
        />
        <div className="flex flex-col md:flex-row justify-between gap-6 px-4 xl:px-[115px] mt-[97px] rounded-[21px]">
          {contactCards.map((card, index) => (
            <Card
              key={index}
              className="w-full md:w-[404px] h-[297px] bg-[#1f3359] rounded-[21px] bg-[url(/assets/images/iconBg.png)] bg-cover bg-center relative"
            >
              <div className="absolute inset-0 [background:linear-gradient(133deg,rgba(24,32,48,0.92)_0%,rgba(31,51,89,0.92)_100%)] rounded-[21px]" />
              <CardContent className="flex flex-col items-center justify-center h-full p-0 relative z-10">
                <div className="w-[86px] h-[86px] mb-6 flex items-center justify-center">
                  {React.createElement(card.icon, {
                    className: "w-12 h-12 text-[#d99541]",
                  })}
                </div>
                <h3 className="font-raleway font-bold text-[#d99541] text-2xl md:text-xl lg:text-2xl tracking-[1.20px] mb-6">
                  {card.title}
                </h3>
                <p className="font-raleway font-medium text-white text-xl md:text-base lg:text-xl tracking-[1.00px]">
                  {card.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="w-full max-w-[1327px] mx-auto flex flex-col md:flex-row px-4 sm:px-6 lg:px-8 mt-[78px] gap-6">
          <div className="hidden xl:block w-full xl:w-[489px] h-auto md:h-[667px] shadow-[0px_0px_6px_#00000040] overflow-hidden rounded-[21px] xl:rounded-r-none">
            <img
              className="w-full h-full object-cover"
              alt="Contact Image"
              src="/assets/images/contact.jpg"
            />
          </div>

          <div className="w-full xl:w-[873px] h-auto md:h-[667px] bg-[#1f3359] relative xl:ml-[-53px] rounded-[21px] xl:rounded-l-none">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[21px] xl:rounded-l-none"
              alt="Background"
              src="/assets/images/iconBg.png"
            />
            <div className="absolute inset-0 [background:linear-gradient(133deg,rgba(24,32,48,0.92)_0%,rgba(31,51,89,0.92)_100%)] rounded-[21px] md:rounded-l-none" />

            <div className="relative p-6 md:p-8 lg:p-[41px] md:pl-[60px] lg:pl-[121px] rounded-[21px] z-10">
              <h2 className="[font-family:'Elza_Trial-Black',Helvetica] font-black text-[25px] md:text-[22px] lg:text-[29px] tracking-[2.03px] leading-[29px] mb-[40px] md:mb-[53px]">
                <span className="text-white tracking-[0.59px]">Gardez le </span>
                <span className="text-[#d99541] tracking-[0.59px]">
                  contact{" "}
                </span>
              </h2>

              <div className="flex flex-wrap gap-4 md:gap-6">
                <div className="flex gap-4 md:gap-6">
                  <Input
                    className="w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-12px)] lg:w-[352px] h-12 md:h-14 lg:h-16 bg-[#1f3359] rounded-[45px] shadow-[0px_0px_8px_#ffffff40] text-[#ffffff87] text-base md:text-sm lg:text-lg px-6 md:px-8 lg:px-10 border-none"
                    placeholder="Prénom & Nom"
                  />

                  <Input
                    className="w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-12px)] lg:w-[352px] h-12 md:h-14 lg:h-16 bg-[#1f3359] rounded-[45px] shadow-[0px_0px_8px_#ffffff40] text-[#ffffff87] text-base md:text-sm lg:text-lg px-6 md:px-8 lg:px-10 border-none"
                    placeholder="Adresse Courriel"
                  />
                </div>

                <Input
                  className="w-full md:w-full lg:w-[723px] h-12 md:h-14 lg:h-16 bg-[#1f3359] rounded-[45px] shadow-[0px_0px_8px_#ffffff40] text-[#ffffff87] text-base md:text-sm lg:text-lg px-6 md:px-8 lg:px-10"
                  placeholder="Objet"
                />

                <Textarea
                  className="w-full md:w-full lg:w-[723px] h-[150px] md:h-[170px] lg:h-[193px] bg-[#1f3359] rounded-[35px] md:rounded-[45px] shadow-[0px_0px_8px_#ffffff40] text-[#ffffff87] text-base md:text-sm lg:text-lg px-6 md:px-8 lg:px-10 py-6 md:py-7 lg:py-8 resize-none"
                  placeholder="Message"
                />
              </div>

              <Button className="mt-6 md:mt-8 lg:mt-10 w-full sm:w-auto md:w-[180px] lg:w-[213px] h-[38px] md:h-[40px] lg:h-[43px] bg-[#d99541] rounded-[46px] shadow-[0px_0px_11px_2px_#ffffff40] [font-family:'Raleway',Helvetica] font-bold text-white text-[14px] md:text-[13px] lg:text-[15px] tracking-[0.75px] px-6">
                ENVOYER UN MESSAGE
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full px-4 xl:px-0 mt-12 md:mt-20">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123952.40027206196!2d-17.569926450000002!3d14.716363300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb17c17d92d5db21f!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1715112372218!5m2!1sfr!2sfr"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Carte Google Maps de Dakar, Sénégal"
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
