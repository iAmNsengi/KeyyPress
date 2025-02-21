import {
  IconBrain,
  IconRocket,
  IconCode,
  IconClockBolt,
  IconDeviceLaptop,
  IconHeartHandshake,
  IconBuildingSkyscraper,
  IconWorldWww,
} from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import { memo } from "react";

export function WhyChooseUs() {
  const features = [
    {
      title: "Innovative Solutions",
      description:
        "We transform complex challenges into elegant, efficient digital solutions that drive real business value.",
      icon: <IconBrain className="w-8 h-8" />,
    },
    {
      title: "Rapid Development",
      description:
        "Our agile approach ensures quick delivery without compromising on quality or performance.",
      icon: <IconRocket className="w-8 h-8" />,
    },
    {
      title: "Expert Development",
      description:
        "Our team of skilled developers brings years of experience across various technologies and industries.",
      icon: <IconCode className="w-8 h-8" />,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock support and maintenance to ensure your solutions run smoothly at all times.",
      icon: <IconClockBolt className="w-8 h-8" />,
    },
    {
      title: "Modern Technology",
      description:
        "We leverage cutting-edge technologies and best practices to build future-proof solutions.",
      icon: <IconDeviceLaptop className="w-8 h-8" />,
    },
    {
      title: "Client Partnership",
      description:
        "We build lasting partnerships, working closely with you to understand and achieve your goals.",
      icon: <IconHeartHandshake className="w-8 h-8" />,
    },
    {
      title: "Scalable Solutions",
      description:
        "Our solutions are built to grow with your business, from startup to enterprise scale.",
      icon: <IconBuildingSkyscraper className="w-8 h-8" />,
    },
    {
      title: "Global Reach",
      description:
        "Serving clients worldwide with solutions that make an impact across borders.",
      icon: <IconWorldWww className="w-8 h-8" />,
    },
  ];

  return (
    <section id="why-choose-us" className="bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Why Choose <span className="text-orange-600">Us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = memo(
  ({
    title,
    description,
    icon,
    index,
  }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
  }) => {
    return (
      <div
        className={cn(
          "flex flex-col lg:border-r border-slate-700 py-10 relative group/feature",
          (index === 0 || index === 4) && "lg:border-l",
          index < 4 && "lg:border-b"
        )}
      >
        {index < 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-slate-700/50 to-transparent pointer-events-none" />
        )}
        {index >= 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-slate-700/50 to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-orange-500">{icon}</div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-600 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
            {title}
          </span>
        </div>
        <p className="text-sm text-gray-400 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    );
  }
);

export default memo(WhyChooseUs);
