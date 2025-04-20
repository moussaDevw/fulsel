"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export const HandSection = () => {
  const router = useRouter();
  return (
    <div className="w-full max-w-full md:max-w-[399px] mx-auto mt-6">
      <Card className="rounded-[21px] border-none shadow-[0px_0px_2px_#1f335940] bg-[#FFFEFD]">
        <CardContent className="p-8">
          <div className="relative w-full h-[385px] rounded-[21px] shadow-[0px_0px_2px_#1f335940] bg-[linear-gradient(180deg,rgba(31,65,89,1)_0%,rgba(8,58,95,1)_100%)] overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="Background"
              src="/assets/images/iconBg.png"
            />

            <div className="relative z-10 flex flex-col items-center pt-10">
              <div className="text-center font-bold text-white text-[19px] tracking-[0.95px] leading-[33.8px] mb-6">
                POUR OBTENIR
                <br />
                PLUS D&apos;INFORMATION
              </div>

              <Button
                className="bg-[#d99541] rounded-[46px] shadow-[0px_0px_11px_2px_#00000040] font-bold text-white text-[15px] tracking-[0.75px] px-5 py-3.5 mb-6 cursor-pointer"
                onClick={() => router.push("/contact")}
              >
                CONTACTEZ-NOUS
                <img
                  className="ml-2 w-[13px] h-3.5"
                  alt="Arrow"
                  src="/assets/svgs/arrow.svg"
                />
              </Button>

              <img
                className="w-[205px] h-[205px] object-cover"
                alt="Hand holding house"
                src="/assets/images/img7.jpg"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
