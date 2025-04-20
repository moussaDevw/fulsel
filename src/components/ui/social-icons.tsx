import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

type SocialIconProps = {
  type: "facebook" | "instagram" | "linkedin" | "twitter" | "youtube";
  size?: number;
  color?: string;
};

export const SocialIcon = ({
  type,
  size = 19,
  color = "#000",
}: SocialIconProps) => {
  const iconMap = {
    facebook: <Facebook size={size} color={color} />,
    instagram: <Instagram size={size} color={color} />,
    linkedin: <Linkedin size={size} color={color} />,
    twitter: <Twitter size={size} color={color} />,
    youtube: <Youtube size={size} color={color} />,
  };

  return (
    <div className="w-[29px] h-[30px] bg-[#f8f8f8] rounded-[3px] shadow-[0px_0px_2px_#00000040] flex items-center justify-center">
      {iconMap[type]}
    </div>
  );
};

type SocialIconsProps = {
  color?: string;
};

export const SocialIcons = ({ color = "#000" }: SocialIconsProps) => {
  return (
    <div className="flex gap-2">
      <SocialIcon type="facebook" size={23} color={color} />
      <SocialIcon type="linkedin" size={19} color={color} />
      <SocialIcon type="instagram" size={16} color={color} />
    </div>
  );
};
