import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
  link: string; // Added link property
}
const serviceList: ServiceProps[] = [
  {
    title: "1Anime",
    description:
      "Watch Anime, Read Manga all for FREE without ads - with AniList, MyAnimeList tracking and more!",
    pro: 0,
    link: "https://1ani.me", // Added link
  },
  {
   title: "EnjoyTown",
   description: "A streaming platform for lazy people who like to watch millions of movies, series and animes for free",
   pro: 0,
   link: "https://enjoytown.pro"
  },
  {
    title: "1AI",
    description: "Chat, build connections and spend time together, with your own AI Character",
    pro: 1,
    link: "https://1ai.technology", // Added link
  },
];

export const ServicesSection = () => {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Our Projects
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Check out our Projects
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Making apps and games just for the community, by community.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro, link }) => (
          <Link key={title} href={link} passHref>
            <Card
              className="bg-muted/60 dark:bg-card h-full relative cursor-pointer" // Added cursor-pointer for better UX
            >
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <Badge
                data-pro={ProService.YES === pro}
                variant="secondary"
                className="absolute -top-2 -right-3 data-[pro=false]:hidden"
              >
                COMING SOON!
              </Badge>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
