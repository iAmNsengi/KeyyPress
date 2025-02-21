import { Code2, Paintbrush, HeadphonesIcon, Laptop } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-8 h-8 text-orange-500" />,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies for optimal performance and scalability.",
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-orange-500" />,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create engaging and intuitive digital experiences.",
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8 text-orange-500" />,
    title: "IT Support",
    description:
      "24/7 technical support and maintenance services to keep your systems running smoothly.",
  },
  {
    icon: <Laptop className="w-8 h-8 text-orange-500" />,
    title: "Digital Solutions",
    description:
      "End-to-end digital transformation services tailored to your business needs.",
  },
];

const Services = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-orange-600">Services</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business
            thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
