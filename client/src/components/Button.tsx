interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button className="bg-transparent no-underline group cursor-pointer relative rounded-full p-px text-xs font-semibold leading-6 text-white inline-block ">
      <span className="absolute overflow-hidden rounded-full">
        <span className="absolute rounded-full duration-500 " />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full text-white bg-orange-600 hover:bg-transparent hover:text-orange-600  px-8 py-2">
        <span> {text} </span>
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 duration-500" />
    </button>
  );
};

export default Button;
