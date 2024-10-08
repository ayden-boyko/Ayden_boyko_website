"use client";

const Navbar = () => {
  return (
    <div className="fixed left-0 z-50 lg:w-1/12 sm:w-11/12 h-full transition-transform duration-500 2xl:-translate-x-24 2xl:translate-y-10 xl:-translate-x-20 xl:translate-y-6 lg:translate-y-6 lg:-translate-x-12 md:translate-y-5 sm:translate-y-5 hover:translate-x-0">
      <div className="-bottom-96 lg:grid lg:grid-cols-1 animate-load-left lg:gap-0.5 min-[280px]:flex min-[280px]:gap-3 ">
        <a
          className="transition ease-in-out delay-150 duration-400 bg-red-400 dark:bg-red-700 inline-block py-3 text-center text-black border-2 border-black font-semibold rounded-sm hover:scale-125 hover:shadow-lg hover:px-3"
          href="#About_Me"
        >
          About me
        </a>

        <a
          className="transition ease-in-out delay-150 duration-400 bg-yellow-400 dark:bg-yellow-700 inline-block py-3 text-center text-black border-2 border-black font-semibold rounded-sm hover:scale-125 hover:shadow-lg hover:px-3"
          href="#Experience"
        >
          Experience
        </a>

        <a
          className="transition ease-in-out delay-150 duration-400 bg-lime-400 dark:bg-lime-700 inline-block py-3 text-center text-black border-2 border-black font-semibold rounded-sm hover:scale-125 hover:shadow-lg hover:px-3"
          href="#Projects"
        >
          Projects
        </a>

        <a
          className="transition ease-in-out delay-150 duration-400 bg-teal-400 dark:bg-teal-700 inline-block py-3 text-center text-black border-2 border-black font-semibold rounded-sm hover:scale-125 hover:shadow-lg hover:px-3"
          href="#Contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
