"use client";
import Image from "next/image";
import { useState } from "react";
import { InView } from "react-intersection-observer";

type props = {
  Images: Map<string, string>;
  styling: string;
  animation: string;
  text: string | null;
  size: Number;
  imageStyle: string;
  gridStyle: string;
  linkStyle: string;
};
const Imagebox = (props: props) => {
  const {
    Images,
    styling,
    animation,
    text,
    size,
    linkStyle,
    gridStyle,
    imageStyle,
  } = props;
  const [finalstyle, setFinalStyle] = useState(styling);
  const [gridstyle, setStyle] = useState(gridStyle);
  const imageslayout = Array.from(Images).map(([key, value]) => {
    return (
      <div key={key}>
        <a
          className={linkStyle}
          href={value}
          aria-label="label"
          target="_blank"
          rel="noopener"
        >
          <Image
            src={key}
            alt="Icon"
            width={size as number}
            height={size as number}
            className={imageStyle}
            placeholder="blur"
            blurDataURL={value}
          />
        </a>
      </div>
    );
  });
  if (animation == "animate-right")
    return (
      <InView
        as="div"
        onChange={(inView, entry) =>
          inView
            ? setFinalStyle(styling.replace("invisible", "visible") + animation)
            : ""
        }
        className={finalstyle}
      >
        <div className="  transition duration-1000 bg-white rounded-sm border-black border-2 -translate-y-2 translate-x-2 text-black w-full h-full dark:bg-slate-500 dark:text-white pl-16 pb-2 pr-16 pt-2 gap-x-16 sm:p-2">
          {text === null ? <></> : <p className="text-center">{text}</p>}
          <div className={gridstyle}>{imageslayout}</div>
        </div>
      </InView>
    );
  else
    return (
      <InView
        as="div"
        onChange={(inView, entry) =>
          inView
            ? setFinalStyle(styling.replace("invisible", "visible") + animation)
            : ""
        }
        className={finalstyle}
      >
        <div className="  transition duration-1000 bg-white rounded-sm border-black border-2 -translate-y-2 -translate-x-2 text-black w-full h-full dark:bg-slate-500 dark:text-white pl-16 pb-2 pr-16 pt-2 gap-x-16 sm:p-2">
          {text === null ? <></> : <p className="text-center">{text}</p>}
          <div className={gridstyle}>{imageslayout}</div>
        </div>
      </InView>
    );
};

export default Imagebox;
