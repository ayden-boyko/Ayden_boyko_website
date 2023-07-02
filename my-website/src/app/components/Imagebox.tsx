"use client";
import Image from "next/image";
import { useState } from "react";
import { InView } from "react-intersection-observer";

type props = {
  num_of_images: Number;
  /**an array of arrays, each sub-array will have image link & link related to image.
   *  ex: [ [nextjs logo svg, nextjs homepage link] , [typescript logo svg, typescript homepage link] ] */
  Images: Array<Array<string>>;
  rows: Number;
  cols: Number;
  styling: string;
  animation: string;
  text: string | null;
};

const Imagebox = (props: props) => {
  const { num_of_images, Images, rows, cols, styling, animation, text } = props;
  const [finalstyle, setFinalStyle] = useState(styling);
  return (
    <InView
      as="div"
      onChange={(inView, entry) =>
        inView ? setFinalStyle(styling + animation) : ""
      }
      className={finalstyle}
    >
      <div className=" bg-white rounded-sm border-black border-2 -translate-y-2 translate-x-2 text-black w-full h-full dark:bg-slate-500 dark:text-white pl-16 pb-2 pr-16 pt-2 gap-x-16">
        {text === null ? <></> : <p>{text}</p>}
        <div className=" flex flex-row">
            {/**use mapp to display images below */}
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
          </a>
        </div>
      </div>
    </InView>
  );
};

export default Imagebox;
