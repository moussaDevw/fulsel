import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const BlogPostCardSection = () => {
  // Data for category items to enable mapping
  const categories = [
    { id: 1, name: "Lorem ipsum" },
    { id: 2, name: "Lorem ipsum" },
    { id: 3, name: "Lorem ipsum" },
    { id: 4, name: "Lorem ipsum" },
    { id: 5, name: "Lorem ipsum" },
  ];

  return (
    <div className="w-full max-w-full md:max-w-[409px] mt-6">
      <Card className="rounded-[21px] border-none shadow-[0px_0px_2px_#1f335940] bg-[#FFFEFD]">
        <CardContent className="p-10">
          <div className="flex items-center mb-6">
            <div className="w-[13px] h-[13px] bg-[#d99541] rounded-[6.5px] mr-3" />
            <h3 className="font-extrabold text-[#1f3359] text-[25px]">
              Catégories
            </h3>
          </div>

          <ul className="space-y-4">
            {categories.map((category, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <img
                    className="w-2 h-[15px] mr-4"
                    alt="Arrow"
                    src="/assets/svgs/arrow.svg"
                  />
                  <span className="font-extrabold text-[#1f3359] text-base">
                    {category.name}
                  </span>
                </div>
                <Separator className="my-2 bg-[#00000014] w-[90%] mx-auto" />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
