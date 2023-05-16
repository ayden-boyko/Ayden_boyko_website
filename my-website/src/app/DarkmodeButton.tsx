'use client';

import { useState, useEffect } from 'react';

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user has set a preferred color scheme
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    // Apply dark mode styles
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-row-reverse translate-y-6 -translate-x-6">
        <button
        className="transition duration-200 bg-slate-700 dark:bg-slate-300 rounded p-2 w-12 h-12 flex items-center justify-center
         text-white dark:text-black hover:shadow-xl hover:-translate-y-4 dark:hover:shadow-white"
        onClick={toggleDarkMode}
        >
        dark
        {/* {darkMode ? (
            <svg
            className="w-6 h-6 text-yellow-400 dark:text-yellow-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
            </svg>
        ) : (
            <svg
            className="w-6 h-6 text-yellow-400 dark:text-yellow-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
            />
            </svg>
        )} */}
        </button>
    </div>
  );
};

export default DarkModeButton;