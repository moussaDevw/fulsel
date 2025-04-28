import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/app/components/Footer";
import { BlogPostCardSection } from "../components/BlogPostCardSection";
import { BlogSearchSection } from "../components/BlogSearchSection";
import { BlogContentSection } from "../BlogContentSection";
import { HandSection } from "../../../../components/HandSection";

export default function BlogPost() {
  const post = {
    id: "1",
    title: "Augmenter La Valeur De Son Bien Avant La Vente",
    excerpt:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum....",
    date: "MARS",
    category: "CATÉGORIE",
  };
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        <HeroSection
          title="Augmenter La Valeur "
          breadcrumbs={[
            { label: "Accueil", link: "/" },
            { label: "Blogs", link: "/blogs", isActive: true },
          ]}
        />

        {/* Main Content Area */}
        <div className="flex flex-col items-start lg:flex-row mt-8 md:mt-[106px] px-4 md:px-8 lg:px-[61px] gap-8">
          <div className="flex-1">
            <BlogContentSection
              post={post}
              className="rounded-none shadow-none"
              separatorFullWidth={true}
            />
            <Separator className="block max-w-[93%] mx-auto bg-[#00000014]" />
            <div className="flex items-center gap-y-2">
              <img
                src="/assets/svgs/arrowTopLeft.svg"
                className="size-[30px]"
                alt="blog-post"
              />
              <h2 className="mt-5 text-left text-xl font-bold">
                Augmenter La Valeur De Son Bien Avant La Vente
              </h2>
            </div>
            {/* <div className="mt-12">
              <h2 className="font-extrabold text-[#1e1e1e] text-4xl tracking-[0.72px] leading-[39px] mb-6">
                Laissez Un Commentaire
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="font-medium text-[#00000091] text-lg tracking-[0.36px] leading-[39px]">
                    Commentaire*
                  </label>
                  <Textarea className="w-full h-[143px] bg-[#fffefd] rounded-[11px] border-[0.5px] border-solid border-[#00000033] mt-2" />
                </div>

                <div>
                  <label className="font-medium text-[#00000091] text-lg tracking-[0.36px] leading-[39px]">
                    Nom*
                  </label>
                  <Input className="w-full h-[55px] bg-[#fffefd] rounded-[11px] border-[0.5px] border-solid border-[#00000033] mt-2" />
                </div>

                <div>
                  <label className="font-medium text-[#00000091] text-lg tracking-[0.36px] leading-[39px]">
                    Adresse Courriel*
                  </label>
                  <Input className="w-full h-[55px] bg-[#fffefd] rounded-[11px] border-[0.5px] border-solid border-[#00000033] mt-2" />
                </div>

                <Button className="w-[268px] h-[49px] bg-[#d99541] rounded-[31px] font-extrabold text-white text-lg tracking-[0.36px]">
                  Poster Un Commentaire
                </Button>
              </div>
            </div> */}
          </div>

          <div className="w-full lg:w-[350px] mt-8 lg:mt-0">
            <BlogSearchSection />
            <BlogPostCardSection />
            <HandSection />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
