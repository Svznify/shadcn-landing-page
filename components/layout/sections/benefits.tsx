import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "A Trust of a Community",
    description:
      "Fostering trust within our community is essential for collaboration and support.",
  },
  {
    icon: "LineChart",
    title: "Building the World to be a Better Place",
    description:
      "We are committed to creating solutions that positively impact our environment and society.",
  },
  {
    icon: "Wallet",
    title: "Profits for Goods",
    description:
      "A portion of our profits is donated to charity, supporting those in need.",
  },
  {
    icon: "Sparkle",
    title: "All by the Community",
    description:
      "Our initiatives are driven by community involvement and shared goals.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Our Missions in this world</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Innovating for a Better Future.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We strive to create impactful solutions that benefit everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
