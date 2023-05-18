import React from "react";
import { readFile } from "fs/promises";

type textboxinfo = {
    file: string;
    style: string;
    side: "left" | "right";
  };



const fileToText = (path: string) => {
    try {
        const filePath = new URL(path, import.meta.url);
        const contents = readFile(filePath, { encoding: 'utf8' });
        //console.log(contents);
        return contents;
      } catch (error) {
        console.error(error);
    }

}

const TextBox = (text:textboxinfo) => {
    let basestyle1: string = "rounded-sm border-black border-2 animate-idle-left w-2/6 h-2/6 ";
    let basestyle2: string = "rounded-sm border-black border-2 animate-idle-right w-2/6 h-2/6 ";
    let final_style1:string = basestyle1.concat(text.style.toString());
    let final_style2:string = basestyle2.concat(text.style.toString());
    return (
        <>
            {text.side === "left" ?
            <div className={final_style1}>
                <p className='bg-slate-300 text-black translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-600 px-2 py-2 animate-cancel'>
                    {fileToText(text.file)}
                </p>
            </div> 
            : 
            <div className={final_style2}>
                <p className='bg-slate-300 text-black -translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-600 px-2 py-2 animate-cancel'>
                    {fileToText(text.file)}
                </p>
            </div> 
            }   
        </>
    )
}

export default TextBox;


