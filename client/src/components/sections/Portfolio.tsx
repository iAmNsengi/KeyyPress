"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

// Replace next/image and next/link with appropriate alternatives
import { Link } from "react-router-dom";

const products = [
  {
    title: "E-Commerce Platform",
    link: "#",
    thumbnail:
      "https://img.freepik.com/premium-vector/medical-healthcare-landing-page-design-template_672162-254.jpg",
    description: "Modern e-commerce solution with advanced features",
  },
  {
    title: "Healthcare Dashboard",
    link: "#",
    thumbnail:
      "https://market-resized.envatousercontent.com/previews/files/226852993/preview_version/05_parent.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=7fc2443c696c6baebfc0e7ca092dcf2cd68e16bf8489c36c69621e9755623704",
    description: "Intuitive dashboard for healthcare professionals",
  },
  {
    title: "UnBounce",
    link: "#",
    thumbnail:
      "https://unbounce.com/photos/Blog_7CreativeLPideas_Header_1130x484.jpg",
    description: "Intuitive dashboard for healthcare professionals",
  },
  {
    title: "Learning Platform",
    link: "#",
    thumbnail:
      "https://www.jamfal.com/k/download/screen/2017/07/kashipara.com_1-PNG356365431.PNG",
    description: "Intuitive dashboard for healthcare professionals",
  },
  {
    title: "Learning Platform",
    link: "#",
    thumbnail:
      "https://www.jamfal.com/k/download/screen/2017/07/kashipara.com_1-PNG356365431.PNG",
    description: "Intuitive dashboard for healthcare professionals",
  },
  {
    title: "Learning Platform",
    link: "#",
    thumbnail:
      "https://www.jamfal.com/k/download/screen/2017/07/kashipara.com_1-PNG356365431.PNG",
    description: "Intuitive dashboard for healthcare professionals",
  },
  {
    title: "Learning Platform",
    link: "#",
    thumbnail:
      "https://www.jamfal.com/k/download/screen/2017/07/kashipara.com_1-PNG356365431.PNG",
    description: "Intuitive dashboard for healthcare professionals",
  },
  {
    title: "Learning Platform",
    link: "#",
    thumbnail:
      "https://www.jamfal.com/k/download/screen/2017/07/kashipara.com_1-PNG356365431.PNG",
    description: "Intuitive dashboard for healthcare professionals",
  },
];

export function Portfolio() {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <section id="portfolio" className="bg-slate-900 relative">
      <div
        ref={ref}
        className="h-[250vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      >
        <Header />
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
        >
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row mb-20 space-x-20">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
            {thirdRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white">
        Our Latest <br /> <span className="text-orange-600">Work</span>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-400">
        Explore our portfolio of successful projects where we've helped
        businesses achieve their digital goals through innovative solutions.
      </p>
    </div>
  );
};

const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link to={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-slate-900 pointer-events-none rounded-xl transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
        <h2 className="text-xl font-bold text-white mb-2">{product.title}</h2>
        <p className="text-gray-300 text-sm">{product.description}</p>
      </div>
    </motion.div>
  );
};

export default Portfolio;
