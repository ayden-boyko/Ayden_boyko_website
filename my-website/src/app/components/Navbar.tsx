"use client";

const Navbar = () => {
  return (
    <ul className="flex items-center justify-center -translate-y-4 ">
      <li className="-mb-px mr-1 hover:px-3 duration-500 delay-75 ">
        <a
          className="transition ease-in-out delay-150 duration-300 bg-yellow-500 text-center inline-block py-2 px-4 text-black font-semibold rounded hover:scale-125 hover:shadow-lg"
          href="#Welcome"
        >
          Welcome
        </a>
      </li>
      <li className="-mb-px mr-1 hover:px-3 duration-500 delay-75">
        <a
          className="transition ease-in-out delay-150 duration-300 bg-red-500 inline-block py-2 px-4 text-black font-semibold rounded hover:scale-125 hover:shadow-lg"
          href="#About_Me"
        >
          About me
        </a>
      </li>
      <li className="-mb-px mr-1 hover:px-3 duration-500 delay-75">
        <a
          className="transition ease-in-out delay-150 duration-300 bg-blue-500 inline-block py-2 px-4 text-black font-semibold rounded hover:scale-125 hover:shadow-lg"
          href="#Projects"
        >
          Projects
        </a>
      </li>
      <li className="-mb-px mr-1 hover:px-3 duration-500 delay-75">
        <a
          className="transition ease-in-out delay-150 duration-300 bg-green-500 inline-block py-2 px-4 text-black font-semibold rounded hover:scale-125 hover:shadow-lg"
          href="#Contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
