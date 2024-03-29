"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import sun from "src/app/icons/sun.svg";
import moon from "src/app/icons/moon.svg";

type ContainerProps = {
  children: React.ReactNode;
  id: string;
};

const DarkModeButton = (props: ContainerProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [text, setText] = useState("Dark");

  useEffect(() => {
    // Check if the user has set a preferred color scheme
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    {
      text === "Dark" ? setText("Light") : setText("Dark");
    }
  };

  return (
    <main>
      <div className="flex flex-row z-50 2xl:translate-y-6 xl:translate-y-4 fixed left-full xl:translate-x-56 lg:translate-x-56 lg:translate-y-5 md:translate-x-56 md:translate-y-5 sm:translate-y-4 sm:translate-x-52 min-[280px]:translate-x-24">
        <button
          className="transition animate-load-right duration-200 bg-slate-700 dark:bg-slate-300 rounded p-2 w-12 h-12 flex items-center justify-center
          text-white dark:text-black hover:shadow-lg hover:translate-y-1 -mx-72 dark:hover:shadow-lg dark:hover:shadow-amber-300 border-black border-2"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <Image src={sun} alt="sun" />
          ) : (
            <Image src={moon} alt="moon" />
          )}
        </button>
      </div>

      {props.children}
    </main>
  );
};

export default DarkModeButton;
