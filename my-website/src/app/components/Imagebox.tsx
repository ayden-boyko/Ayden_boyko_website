"use client";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const Imagebox = (
  images: Number,
  Images: Array<string>,
  rows: Number,
  cols: Number,
  styling: string,
  animation: string
) => {
  return (
    <div className="bg-green-500 w-10/12 h-10/12 rounded-sm border-black border-2 my-16 animate-left">
      <div className=" bg-white rounded-sm border-black border-2 -translate-y-2 translate-x-2 text-black w-full h-full dark:bg-slate-500 dark:text-white pl-16 pb-2 pr-16 pt-2 gap-x-16">
        <p>Other ways to contact me</p>
        <div className=" flex flex-row">
          <a
            className=" w-10/12 h-4/6 m-2 py-4 rounded-full"
            href="https://discordapp.com/users/bb_tornado"
            aria-label="Discord"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="/discordapp.svg"
              alt="discord Icon"
              width={200}
              height={200}
              className="bg-white p-2 rounded-full"
            />
          </a>
          <a
            className=" w-10/12 h-4/6 m-2 py-4 rounded-full"
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="/linkedin.svg"
              alt="linkedin Icon"
              width={200}
              height={200}
              className="bg-white p-2 rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imagebox;
