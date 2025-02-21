const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/portfolio/ecommerce.jpg",
    description:
      "Modern e-commerce solution with advanced features and seamless user experience.",
  },
  {
    title: "Healthcare Dashboard",
    category: "UI/UX Design",
    image: "/portfolio/healthcare.jpg",
    description:
      "Intuitive dashboard design for healthcare professionals to manage patient data.",
  },
  {
    title: "Mobile Banking App",
    category: "Digital Solutions",
    image: "/portfolio/banking.jpg",
    description:
      "Secure and user-friendly mobile banking application with real-time transactions.",
  },
];

const Portfolio = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Latest Work
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses
            achieve their digital goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <span className="text-orange-500 text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
