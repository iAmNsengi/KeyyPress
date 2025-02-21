import { memo } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Eliezer Nsengi",
    role: "Lead Developer & Founder",
    image: "/founder.jpeg",
    bio: "Full-stack expert with 6+ years of experience in building scalable applications.",
    socials: {
      github: "https://github.com/iAmNsengi",
      linkedin: "https://www.linkedin.com/in/eliezer-nsengi-6530b0285/",
    },
  },
  {
    name: "Fabrice Ingabire",
    role: "Project Manager",
    image: "/fabrice.jpg",
    bio: "Creative designer passionate about crafting beautiful and intuitive user experiences.",
    socials: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/fabrice-ingabire-473a13224/",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Gasore Mugwaneza",
    role: "Backend Engineer",
    image: "/gasore.enc",
    bio: "Cloud architecture specialist with expertise in building robust backend systems.",
    socials: {
      github: "http://github.com/gasorekibo/",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Johnson Tuyishime",
    role: "Frontend Engineer",
    image: "/johnson.jpeg",
    bio: "Certified frontend engineer with a track record of delivering successful projects.",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

const Team = () => {
  return (
    <section className="relative py-40 bg-slate-800/50">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#EA580C10,transparent_25%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#0F172A50,transparent_25%)]" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">
            Meet Our <span className="text-orange-600">Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're a diverse team of talented professionals passionate about
            creating innovative digital solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-slate-800">
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.bio}
                  </p>

                  <div className="flex space-x-4 text-gray-400">
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Team);
