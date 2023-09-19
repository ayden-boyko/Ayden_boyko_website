"use client";
import React, { useState } from "react";
import { InView } from "react-intersection-observer";

type textboxinfo = {
  content: string;
  style: string;
  side: "left" | "right";
  initial?: true | false;
};

const Displaybox = (text: textboxinfo) => {
  if (text.initial == undefined) text.initial = false;
  const { content, style, side, initial } = text;
  const basestyle: string = " rounded-sm border-black border-2 invisible ";
  const [style1, setStyle1] = useState(basestyle.concat(style.toString()));
  const [style2, setStyle2] = useState(basestyle.concat(style.toString()));
  if (side == "left" && initial == false)
    return (
      <InView
        as="div"
        onChange={(inView, entry) =>
          inView
            ? setStyle1(
                style1.replace("invisible", "visible") + " animate-left "
              )
            : ""
        }
        className={style1}
      >
        <p className=" transition duration-1000 bg-slate-200 text-black -translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none">
          {content}
        </p>
      </InView>
    );
  if (side == "right" && initial == false)
    return (
      <InView
        as="div"
        onChange={(inView, entry) =>
          inView
            ? setStyle2(
                style2.replace("invisible", "visible") + " animate-right "
              )
            : ""
        }
        className={style2}
      >
        <div className=" transition duration-1000 bg-slate-200 text-black -translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none">
          {content}
        </div>
      </InView>
    );
  if (side == "right" && initial == true)
    return (
      <InView
        as="div"
        onChange={(inView, entry) =>
          inView
            ? setStyle2(
                style2.replace("invisible", "visible") + " initial-load-right "
              )
            : ""
        }
        className={style2}
      >
        <div className=" transition duration-1000 bg-slate-200 text-black translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none">
          {content}
        </div>
      </InView>
    );
  if (side == "left" && initial == true)
    return (
      <InView
        as="div"
        onChange={(inView, entry) =>
          inView
            ? setStyle2(
                style2.replace("invisible", "visible") + " initial-load-left "
              )
            : ""
        }
        className={style2}
      >
        <div className=" transition duration-1000 bg-slate-200 text-black -translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none">
          {content}
        </div>
      </InView>
    );
  else return <div>ERROR</div>;
};

export default Displaybox;
