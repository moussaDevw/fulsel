"use client";
import React from "react";
import { useRouter } from "next/navigation";
type FinanceSimulatorProps = {
  className?: string;
};

export const FinanceSimulator = ({
  className = "bg-[#F5F4F2]",
}: FinanceSimulatorProps) => {
  const router = useRouter();
  const goToContact = () => {
    router.push("/contact");
  };
  return (
    <div className={`py-8 mb-20 ${className}`}>
      <div className="container">
        <div className="relative h-[330px] bg-[#1f3359] rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center">
          <div className="absolute inset-0 w-full h-full bg-[url(/assets/images/iconBg.png)] opacity-12" />
          <div className="w-full lg:w-2/3 text-white pr-0 md:pr-8 mb-6 md:mb-0 z-10">
            <h2 className="text-xl md:text-2xl xl:text-[38px] font-bold text-[#d99541] mb-4">
              Simulez votre financement en quelques clics !
            </h2>
            <p className="text-sm md:text-sm xl:text-[21px] mb-2">
              Calculez vos mensualités en fonction du montant emprunté et de la
              durée souhaitée.
            </p>
            <p className="text-sm md:text-[21px] mb-6">
              Obtenez une estimation rapide et ajustez votre projet en toute
              sérénité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={goToContact}
                className="bg-[#d99541] hover:bg-[#d99541]/90 text-white rounded-full px-4 py-2 text-[12px] md:text-[15px] font-medium"
              >
                OBTENIR UNE ESTIMATION DÉTAILLÉE
              </button>
              <button
                onClick={goToContact}
                className="bg-[#d99541] border border-none hover:bg-white/10 text-white rounded-full px-4 py-2 text-[12px] md:text-[15px] font-medium"
              >
                PARLER À UN CONSEILLER
              </button>
            </div>
          </div>
          <div className="hidden lg:block lg:absolute right-0 h-[500px] w-[500px] bottom-0">
            <img
              src="/assets/images/img7.jpg"
              alt="Main tenant une maison"
              className="object-contain h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
