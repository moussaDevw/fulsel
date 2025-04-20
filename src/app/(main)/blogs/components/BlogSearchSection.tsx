import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const BlogSearchSection = () => {
  return (
    <Card className="rounded-[21px] border-none shadow-[0px_0px_2px_#1f335940] bg-[#FFFEFD]">
      <CardContent className="p-10">
        <div className="flex items-center mb-6">
          <div className="w-[13px] h-[13px] bg-[#d99541] rounded-[6.5px] mr-3" />
          <h3 className="font-extrabold text-[#1f3359] text-[25px]">
            Recherche
          </h3>
        </div>

        <div className="flex h-[51px] rounded-[5px] shadow-[0px_0px_2px_#1f335940] overflow-hidden">
          <Input
            className="h-full border-none rounded-l-[5px] text-[#7b7979] text-[13px]"
            placeholder="Rechercher par ..."
          />
          <Button className="h-full w-[123px] bg-[#d99541] rounded-l-none rounded-r-[5px] font-extrabold text-[#fefcf9] text-[17px]">
            Chercher
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
