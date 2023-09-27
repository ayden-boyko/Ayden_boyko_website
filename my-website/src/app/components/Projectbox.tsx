"use client";
import Image from "next/image";
import { useState } from "react";
import { InView } from "react-intersection-observer";

type props = {
  Images: Map<string, string>;
  iconSize: number;
  backboxStyling: string;
  side: string;
  text: string;
  secondBoxStyling: string;
  iconStyle: string;
  projectImage: string;
  projectImageSize: number;
  projectImageStyle: string;
  projectLink: string;
};

const Projectbox = (props: props) => {
  const {
    Images,
    iconSize,
    backboxStyling,
    side,
    text,
    secondBoxStyling,
    iconStyle,
    projectImage,
    projectImageSize,
    projectImageStyle,
    projectLink,
  } = props;
  const imageslayout = Array.from(Images).map(([key, value]) => {
    return (
      <div key={key} className="grid grid-cols-1 ">
        <a
          className="w-10/12 h-4/6 my-2 rounded-full"
          href={value}
          aria-label="label"
          target="_blank"
          rel="noopener"
        >
          <Image
            src={key}
            alt="Icon"
            width={iconSize}
            height={iconSize}
            className={iconStyle}
          />
        </a>
      </div>
    );
  });
  const [finalstyle, setFinalStyle] = useState(
    backboxStyling.concat(" invisible")
  );
  switch (side) {
    case "right":
      return (
        <InView
          as="div"
          onChange={(inView, entry) =>
            inView
              ? setFinalStyle(
                  finalstyle.replace("invisible", "visible") + " animate-right"
                )
              : ""
          }
          className={finalstyle}
        >
          <div className=" flex flex-row xl:gap-2">
            <div className="">
              <a
                className=" w-10/12 h-4/6"
                href={projectLink}
                aria-label="label"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={projectImage}
                  alt={projectImage}
                  width={projectImageSize}
                  height={projectImageSize}
                  className={projectImageStyle}
                />
              </a>
            </div>
            <div className={secondBoxStyling}>
              <div className="flex flex-col pl-2 justify-center translate-x-5 scale-125">
                {imageslayout}
              </div>
              <div className=" transition duration-1000 bg-white md:text-base text-black -translate-y-2 translate-x-4 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 p-2 animate-none sm:text-xs">
                <p>{text}</p>
              </div>
            </div>
          </div>
        </InView>
      );
    case "left":
      return (
        <InView
          as="div"
          onChange={(inView, entry) =>
            inView
              ? setFinalStyle(
                  finalstyle.replace("invisible", "visible") + " animate-left"
                )
              : ""
          }
          className={finalstyle}
        >
          <div className=" flex flex-row xl:gap-2">
            <div className={secondBoxStyling}>
              <div className=" transition duration-1000 bg-white md:text-base text-black -translate-x-4 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none sm:text-xs">
                <p>{text}</p>
              </div>
              <div className="flex flex-col justify-center">{imageslayout}</div>
            </div>
            <div className="">
              <a
                className=" w-10/12 h-4/6"
                href={projectLink}
                aria-label="label"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={projectImage}
                  alt={projectImage}
                  width={projectImageSize}
                  height={projectImageSize}
                  className={projectImageStyle}
                />
              </a>
            </div>
          </div>
        </InView>
      );
    default:
      return <div>Error</div>;
  }
};

export default Projectbox;
