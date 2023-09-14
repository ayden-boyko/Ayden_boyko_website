"use client";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="grid grid-rows-2 grid-cols-2 initial-load-left gap-1 w-3/12">
        <a
          className="transition ease-in-out delay-150 duration-300 bg-yellow-500 inline-block py-3 text-center text-black border-2 border-black font-semibold rounded-sm hover:scale-125 hover:shadow-lg hover:px-3"
          href="#Welcome"
        >
          Welcome
        </a>

        <a
          className="transition ease-in-out delay-150 duration-300 bg-red-500 inline-block py-3 text-center text-black border-2 border-black font-semibold rounded-sm hover:scale-125 hover:shadow-lg hover:px-3"
          href="#About_Me"
        >
          About me
        </a>

        <a
          className="transition ease-in-out delay-150 duration-300 bg-blue-500 inline-block py-3 text-center text-black border-2 border-black font-semibold rounded-sm hover:scale-125 hover:shadow-lg hover:px-3"
          href="#Projects"
        >
          Projects
        </a>

        <a
          className="transition ease-in-out delay-150 duration-300 bg-green-500 inline-block py-3 text-center text-black border-2 border-black font-semibold rounded-sm hover:scale-125 hover:shadow-lg hover:px-3"
          href="#Contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
