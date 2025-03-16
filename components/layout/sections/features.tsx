import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: keyof typeof icons; // Changed to use the actual icon type
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Inclusive Development",
    description:
      "We build apps and games designed for everyone, ensuring accessibility and enjoyment for all users.",
  },
  {
    icon: "BadgeCheck",
    title: "Community Trust",
    description:
      "We are trusted by our users and always listen to the community's feedback to improve our offerings.",
  },
  {
    icon: "Goal",
    title: "Unified Vision",
    description:
      "Our 'One' goal and vision drive us to create impactful solutions that resonate with our community.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="whyus" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        All About Community
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes One Development LLC Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Discover the unique features that set us apart and enhance your experience.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
