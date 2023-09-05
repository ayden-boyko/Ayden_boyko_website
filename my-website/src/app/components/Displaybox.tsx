"use client";
import React, { useState } from "react";
import { InView } from "react-intersection-observer";

type textboxinfo = {
  content: string;
  style: string;
  side: "left" | "right";
};

const Displaybox = (text: textboxinfo) => {
  const { content, style, side } = text;
  const basestyle: string = "rounded-sm border-black border-2 invisible ";
  const [style1, setStyle1] = useState(basestyle.concat(style.toString()));
  const [style2, setStyle2] = useState(basestyle.concat(style.toString()));
  switch (side) {
    case "left":
      return (
        <InView
          as="div"
          onChange={(inView, entry) =>
            inView
              ? setStyle1(
                  style1.replace("invisible", "visible") +
                    " delay-[4000ms] animate-left"
                )
              : ""
          }
          className={style1}
        >
          <p className="bg-slate-200 text-black translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none">
            {content}
          </p>
        </InView>
      );
    case "right":
      return (
        <InView
          as="div"
          onChange={(inView, entry) =>
            inView
              ? setStyle2(
                  style2.replace("invisible", "visible") +
                    " delay-[4000ms] animate-right"
                )
              : ""
          }
          className={style2}
        >
          <div className="bg-slate-200 text-black -translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none">
            {content}
          </div>
        </InView>
      );
    default:
      return <div>Error</div>;
  }
};

export default Displaybox;
