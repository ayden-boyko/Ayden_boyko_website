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

    return (
        <>
            {text.side === "left" ?
            <div className="rounded-sm border-black border-2 animate-idle-left w-2/6 h-2/6">
                <p className='bg-slate-300 translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-600 px-2 py-2 '>
                    {fileToText(text.file)}
                </p>
            </div> 
            : 
            <div className="rounded-sm border-black border-2 animate-idle-right w-2/6 h-2/6">
                <p className='bg-slate-300 -translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-600 px-2 py-2 '>
                    {fileToText(text.file)}
                </p>
            </div> 
            }   
        </>
    )
}

export default TextBox;


