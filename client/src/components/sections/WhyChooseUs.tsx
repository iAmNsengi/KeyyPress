import { CheckCircle2, Clock, Users2, Trophy } from "lucide-react";

const features = [
  {
    icon: <CheckCircle2 className="w-12 h-12 text-orange-500" />,
    title: "Quality Assurance",
    description:
      "Our rigorous testing and quality control processes ensure delivery of robust, bug-free solutions.",
  },
  {
    icon: <Clock className="w-12 h-12 text-orange-500" />,
    title: "Timely Delivery",
    description:
      "We understand the importance of deadlines and consistently deliver projects on schedule.",
  },
  {
    icon: <Users2 className="w-12 h-12 text-orange-500" />,
    title: "Expert Team",
    description:
      "Our skilled professionals bring years of experience across various technology domains.",
  },
  {
    icon: <Trophy className="w-12 h-12 text-orange-500" />,
    title: "Proven Track Record",
    description:
      "Successfully delivered hundreds of projects for clients worldwide with excellent satisfaction rates.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose KeyyPress?
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            We combine technical expertise with creative innovation to deliver
            exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
