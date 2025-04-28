import NavBar from "@/app/components/NavBar";
import React from "react";

interface BreadcrumbItem {
  label: string;
  link: string;
  isActive?: boolean;
}

interface HeroSectionProps {
  title: string;
  backgroundImage?: string;
  breadcrumbs: BreadcrumbItem[];
}

export const HeroSection = ({
  title,
  backgroundImage = "/assets/images/bgproject.jpg",
  breadcrumbs,
}: HeroSectionProps) => {
  return (
    <header className="relative h-[350px] sm:h-[400px] md:h-[504px] pt-16 sm:pt-20">
      <div
        className="absolute w-full h-full bg-cover top-0 left-0"
        style={{
          backgroundImage: `linear-gradient(133deg, rgba(24,32,48,0.85) 0%, rgba(31,51,89,0.85) 100%), url('${backgroundImage}')`,
        }}
      />
      <NavBar />
      <div className="w-[90%] sm:w-[80%] md:w-auto absolute top-[120px] sm:top-[180px] md:top-[210px] left-4 sm:left-8 md:left-[65px]">
        <h1 className="[font-family:'Elza_Trial-Black',Helvetica] font-black text-white text-[28px] sm:text-[32px] md:text-[50px] tracking-[1.5px] md:tracking-[3.50px] leading-tight md:leading-[87px] break-words">
          {title}
        </h1>
      </div>

      <div className="absolute top-[185px] sm:top-[260px] md:top-[310px] left-4 sm:left-8 md:left-[65px] flex items-center flex-wrap text-[14px] sm:text-[15px] md:text-[17px]">
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={`breadcrumb-${index}`}>
            <span
              className={`[font-family:'Elza_Text_Trial-Medium',Helvetica] font-medium ${
                item.isActive ? "text-white" : "text-[#d99541]"
              }`}
            >
              {item.label}
            </span>
            {index < breadcrumbs.length - 1 && (
              <img
                className="w-1 h-[7px] mx-2"
                alt="Arrow"
                src="/assets/svgs/arrow.svg"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </header>
  );
};
