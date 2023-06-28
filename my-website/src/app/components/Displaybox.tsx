import React from "react";
import fileToText from "./fileToText";
import { InView } from "react-intersection-observer";

type textboxinfo = {
  file: string;
  style: string;
  side: "left" | "right";
};

const Displaybox = (text: textboxinfo) => {
  let basestyle1: string =
    "rounded-sm border-black border-2 animate-idle-left ";
  let basestyle2: string =
    "rounded-sm border-black border-2 animate-idle-right ";
  let final_style1: string = basestyle1.concat(text.style.toString());
  let final_style2: string = basestyle2.concat(text.style.toString());
  switch (text.side) {
    case "left":
      return (
        <div className={final_style1}>
          <p className="bg-slate-200 text-black translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none">
            {fileToText(text.file)}
          </p>
        </div>
      );
    case "right":
      return (
        <div className={final_style2}>
          <div className="bg-slate-200 text-black -translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none">
            {fileToText(text.file)}
          </div>
        </div>
      );
    // case ((text.side === "left") && (text.image !== "none")):
    //     return(
    //         <div className={final_style1}>
    //             <div className="">
    //                 <a href={text.link} aria-label="none" target="_blank"><Image src={text.image} alt={text.image.toString()} width={text.size} height={text.size}/></a>
    //                 <p className='bg-slate-200 text-black translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none'>
    //                     {fileToText(text.file)}
    //                 </p>
    //             </div>
    //         </div>
    //     );
    default:
      return <div>Error</div>;
  }
};

export default Displaybox;
