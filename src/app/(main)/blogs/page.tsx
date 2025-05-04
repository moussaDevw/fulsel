"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { HandSection } from "../../../components/HandSection";
import { BlogPostCardSection } from "./components/BlogPostCardSection";
import { BlogSearchSection } from "./components/BlogSearchSection";
import { Footer } from "@/app/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ArrowRight } from "lucide-react";
import { BlogContentSection } from "./BlogContentSection";
import { useRouter } from "next/navigation";

export default function Blogs() {
  const router = useRouter();
  // Blog post data for reusability
  const blogPosts = [
    {
      id: "1",
      title: "Augmenter la valeur de son bien avant la vente",
      excerpt:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum....",
      image: "/rectangle-86.png",
      date: "MARS",
      category: "CATÉGORIE",
    },
    {
      id: "2",
      title: "Augmenter la valeur de son bien avant la vente",
      excerpt:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum....",
      image: "/rectangle-86.png",
      date: "MARS",
      category: "CATÉGORIE",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        <HeroSection
          title="Blogs"
          breadcrumbs={[
            { label: "Accueil", link: "/" },
            { label: "Blogs", link: "/blogs", isActive: true },
          ]}
        />

        <div className="container flex flex-col items-start lg:flex-row mt-8 md:mt-[106px] gap-8">
          <div className="flex-1">
            {/* Blog posts section */}
            {blogPosts.map((post, index) => (
              <BlogContentSection
                key={post.id}
                post={post}
                onClick={() => router.push(`/blogs/${post.id}`)}
              />
            ))}

            {/* Pagination */}
            <Pagination className="mt-8 flex justify-start">
              <PaginationContent className="flex gap-2 md:gap-[15px]">
                <PaginationItem>
                  <PaginationLink className="w-10 h-10 md:w-12 md:h-12 bg-[#d99541] rounded-3xl flex items-center justify-center [font-family:'Montserrat',Helvetica] font-bold text-white text-[15px] md:text-[17px]">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="w-10 h-10 md:w-12 md:h-12 bg-[#fefcf9] rounded-3xl border border-solid border-[#1f3359] flex items-center justify-center [font-family:'Montserrat',Helvetica] font-bold text-[#1f3359] text-[15px] md:text-[17px]">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="w-10 h-10 md:w-12 md:h-12 bg-[#fefcf9] rounded-3xl border border-solid border-[#1f3359] flex items-center justify-center [font-family:'Montserrat',Helvetica] font-bold text-[#1f3359] text-[15px] md:text-[17px]">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="w-10 h-10 md:w-12 md:h-12 bg-[#fefcf9] rounded-3xl border border-solid border-[#1f3359] flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-[15px]" />
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          {/* Sidebar sections */}
          <div className="w-full lg:w-[350px] mt-8 lg:mt-0">
            <BlogSearchSection />
            <BlogPostCardSection />
            <HandSection />
          </div>
        </div>

        {/* Footer section */}
        <Footer />
      </div>
    </div>
  );
}
