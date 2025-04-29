"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();
  const goToAbout = () => {
    router.push("/a-propos");
  };
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#F5F5F5]">
      <div className="relative w-full h-full bg-[url(/assets/images/img11.jpg)] bg-cover bg-[center_top] py-24 px-8 md:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content section */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            <h1 className="font-['Sansita',Helvetica] font-black text-4xl md:text-5xl tracking-[3.5px] leading-tight md:leading-[87px]">
              <span className="text-[#1f3359] tracking-[1.75px]">
                A PROPOS{" "}
              </span>
              <span className="text-[#d99541] tracking-[1.75px]">DE NOUS </span>
            </h1>

            <div className="font-['Raleway',Helvetica] font-normal text-base md:text-lg text-black text-justify tracking-[0.90px] leading-[32px] md:leading-[42px]">
              <p>
                Fulser Properties est une entreprise de promotion immobilière
                fondée par des professionnels aux&nbsp;&nbsp;parcours
                diversifiés unis par une ambition commune : bâtir des projets
                immobiliers d&apos;exception où&nbsp;&nbsp;qualité, durabilité
                et innovation se rencontrent.
              </p>
              <p className="mt-6">
                Le nom Fulser est l&apos;association de deux ethnies
                sénégalaises aux liens historiques forts,
                illustrant&nbsp;&nbsp;parfaitement l&apos;esprit de
                collaboration et de complémentarité qui anime notre entreprise.
                Nous nous&nbsp;&nbsp;inspirons de cette richesse culturelle pour
                créer des espaces de vie uniques, conçus avec soin
                et&nbsp;&nbsp;précision.
              </p>
            </div>

            <div className="mt-8">
              <Button
                onClick={goToAbout}
                className="bg-[#1f3359] h-[50px] text-white font-['Raleway',Helvetica] font-bold text-[15px] tracking-[0.75px] rounded-[46px] px-8 py-4 shadow-[0px_0px_11px_2px_#00000040] hover:bg-[#1f3359]/90 transition-colors cursor-pointer"
              >
                EN SAVOIR PLUS
              </Button>
            </div>
          </div>

          {/* Right image section */}
          <div className="w-full lg:w-[540px] h-[651px] relative hidden lg:block">
            <Card className="w-full h-full bg-[url(/assets/images/img2.jpg)] bg-cover bg-center border-0 overflow-hidden rounded-[272.5px_283.5px_0px_0px]">
              <div className="absolute inset-0 rounded-[272.5px_283.5px_0px_0px] shadow-[0px_0px_26px_#00000040] [background:linear-gradient(180deg,rgba(217,149,65,0.15)_0%,rgba(106,91,79,0.15)_50%,rgba(31,51,89,0.15)_100%)]" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
