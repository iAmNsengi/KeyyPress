import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const MovingCards = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-[#0F172A] w-screen items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

const testimonials = [
  {
    quote:
      "Working with KeyyPress was a game-changer for our project. Their attention to detail and technical expertise in full-stack development made our collaboration seamless.",
    name: "Chioma Adebayo",
    title: "Senior Software Engineer @Microsoft Africa",
  },
  {
    quote:
      "KeyyPress brought exceptional value to our team. Their problem-solving skills and dedication to clean, efficient code made them a pleasure to work with.",
    name: "Kwame Mensah",
    title: "Tech Lead @Andela",
  },
  {
    quote:
      "I had the pleasure of collaborating with KeyyPress on several projects. Their expertise in React and Node.js significantly improved our application's performance.",
    name: "Amara Okafor",
    title: "Frontend Developer @Paystack",
  },
  {
    quote:
      "KeyyPress demonstrated outstanding proficiency in both frontend and backend development. Their commitment to delivering high-quality solutions was impressive.",
    name: "Tendai Mutasa",
    title: "Software Architect @Flutterwave",
  },
  {
    quote:
      "A brilliant developer who brings both technical excellence and great communication skills to the table. KeyyPress was instrumental in the success of our project.",
    name: "Aisha Diallo",
    title: "CTO @KasuwaAfrica",
  },
];

export default MovingCards;
