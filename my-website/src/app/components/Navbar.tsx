"use client";

const Navbar = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-1 initial-load-left w-5/12">
      <div className=" hover:px-3 duration-500 delay-75">
        <a
          className="transition ease-in-out delay-150 duration-300 bg-yellow-500 inline-block w-5/12 py-3 text-center text-black font-semibold rounded hover:scale-125 hover:shadow-lg"
          href="#Welcome"
        >
          Welcome
        </a>
      </div>
      <div className=" hover:px-3 duration-500 delay-75">
        <a
          className="transition ease-in-out delay-150 duration-300 bg-red-500 inline-block w-5/12 py-3 text-center text-black font-semibold rounded hover:scale-125 hover:shadow-lg"
          href="#About_Me"
        >
          About me
        </a>
      </div>
      <div className=" hover:px-3 duration-500 delay-75">
        <a
          className="transition ease-in-out delay-150 duration-300 bg-blue-500 inline-block w-5/12 py-3 text-center text-black font-semibold rounded hover:scale-125 hover:shadow-lg"
          href="#Projects"
        >
          Projects
        </a>
      </div>
      <div className=" hover:px-3 duration-500 delay-75">
        <a
          className="transition ease-in-out delay-150 duration-300 bg-green-500 inline-block w-5/12 py-3 text-center text-black font-semibold rounded hover:scale-125 hover:shadow-lg"
          href="#Contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
