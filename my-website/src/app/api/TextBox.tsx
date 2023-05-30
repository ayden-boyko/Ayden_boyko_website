import React from "react";
import { readFile } from "fs/promises";
import Image, { StaticImageData } from "next/image";

type textboxinfo = {
    file: string;
    style: string;
    side: "left" | "right";
    image: string | StaticImageData;
    size: number;
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
    let basestyle1:string = "rounded-sm border-black border-2 animate-idle-left ";
    let basestyle2:string = "rounded-sm border-black border-2 animate-idle-right ";
    let final_style1:string = basestyle1.concat(text.style.toString());
    let final_style2:string = basestyle2.concat(text.style.toString());
    switch (true) {
        case ((text.side === "left") && (text.image === "none")):
            return(
                <div className={final_style1}>
                    <p className='bg-slate-200 text-black translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none'>
                        {fileToText(text.file)}
                    </p>
                </div>
            );
        case ((text.side === "right") && (text.image === "none")):
            return(
            <div className={final_style2}>
                <div className='bg-slate-200 text-black -translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none'>
                    {fileToText(text.file)}
                </div>
            </div>
            )
        case ((text.side === "left") && (text.image !== "none")):
            return(
                <div className={final_style1}>
                    <div className="">
                        <Image src={text.image} alt={text.image.toString()} width={text.size} height={text.size}/>
                        <p className='bg-slate-200 text-black translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none'>
                            {fileToText(text.file)}
                        </p>
                    </div>
                </div>
            );
        case ((text.side === "right") && (text.image !== "none")):
            return(
            <div className={final_style2}>
                <div className=" flex flex-row gap-3 p-2">
                    <Image src={text.image} alt={text.image.toString()} width={text.size} height={text.size} className="rounded-sm border border-black"/>
                    <div className='bg-slate-200 text-black -translate-y-4 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 p-2 animate-none'>
                        {fileToText(text.file)}
                    </div>
                </div>
            </div>
            )
        default:
            return (
                <div>Error</div>
            )
    }
}

export default TextBox;


