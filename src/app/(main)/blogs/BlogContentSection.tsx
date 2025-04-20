import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SocialIcons } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
type BlogContentSectionProps = {
  post: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
  };
  className?: string;
  separatorFullWidth?: boolean;
  onClick?: () => void;
};
export const BlogContentSection = ({
  post,
  className,
  separatorFullWidth = false,
  onClick,
}: BlogContentSectionProps) => {
  return (
    <div>
      <Card
        key={post.id}
        className={cn("mt-6 border-none py-0 gap-0", className)}
      >
        <img
          className="w-full h-[300px] md:h-[400px] lg:h-[466px] object-cover rounded-[21px_21px_0px_0px]"
          alt="Featured blog post"
          src="/assets/images/blog.jpg"
        />
        <CardHeader className="p-0">
          <div className="w-full h-auto md:h-[57px] bg-[#eeecec] flex flex-col md:flex-row items-start md:items-center px-4 py-3 md:px-[42px]">
            <div className="flex items-center">
              <img
                className="w-[19px] h-[19px]"
                alt="Person"
                src="/assets/svgs/person.svg"
              />
              <span className="ml-[5px] [font-family:'Inter',Helvetica] font-bold text-[#6a6a6a] text-sm md:text-base tracking-[1.76px]">
                ADMIN
              </span>
            </div>

            <div className="flex items-center mt-2 md:mt-0 md:ml-[95px]">
              <img
                className="w-[15px] h-[15px]"
                alt="Date range"
                src="/assets/svgs/date.svg"
              />
              <span className="ml-[5px] [font-family:'Inter',Helvetica] font-bold text-[#6a6a6a] text-sm md:text-base tracking-[1.76px]">
                {post.date}
              </span>
            </div>

            <div className="flex items-center mt-2 md:mt-0 md:ml-auto">
              <Badge className="w-2 h-2 rounded-full bg-[#d99541] p-0 mr-[15px]" />
              <span className="[font-family:'Inter',Helvetica] font-bold text-[#6a6a6a] text-sm md:text-base tracking-[1.76px]">
                {post.category}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-[28px]">
          <h2 className="[font-family:'Raleway',Helvetica] font-extrabold text-[#2d2d2d] text-xl md:text-2xl lg:text-3xl tracking-[0.60px] leading-normal md:leading-[48px] w-full">
            {post.title}
          </h2>
          <p className="[font-family:'Raleway',Helvetica] font-medium text-[#797575] text-sm md:text-[17px] leading-normal md:leading-[35px] mt-3 md:mt-5">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter className="px-4 md:px-[41px] pt-4 md:pt-[28px]">
          <div className="w-full">
            <Separator
              className={cn(
                "mx-auto bg-[#00000014]",
                separatorFullWidth ? "w-full" : "w-[90%]"
              )}
            />
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-5">
                <Button
                  variant="link"
                  className="p-0 h-auto cursor-pointer"
                  onClick={onClick}
                >
                  <span className="[font-family:'Raleway',Helvetica] font-black text-[#d99541] text-base md:text-lg tracking-[1.44px] leading-normal md:leading-[48px]">
                    LIRE PLUS
                  </span>
                  <img
                    className="w-4 h-[15px] ml-2"
                    alt="Arrow"
                    src="/assets/svgs/arrowGrup.svg"
                  />
                </Button>
                <div className="mt-4 sm:mt-0">
                  <SocialIcons color="#D99541" />
                </div>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
