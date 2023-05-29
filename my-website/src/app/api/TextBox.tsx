import React from "react";
import { readFile } from "fs/promises";
import Image from "next/image";

type textboxinfo = {
    file: string;
    style: string;
    side: "left" | "right";
    image: string
  };



const fileToText = (path: string) => {
    try {
        const filePath = new URL(path, import.meta.url);
        const contents = readFile(filePath, { encoding: 'utf8' });
        return contents;
      } catch (error) {
        console.error(error);
    }
}

const TextBox = (props:textboxinfo) => {
    let basestyle1:string = "rounded-sm border-black border-2 animate-idle-left ";
    let basestyle2:string = "rounded-sm border-black border-2 animate-idle-right ";
    let final_style1:string = basestyle1.concat(props.style.toString());
    let final_style2:string = basestyle2.concat(props.style.toString());
    switch (true) {
        case ((props.side === "left") && (props.image === "none")):
            return(
                <div className={final_style1}>
                    <p className='bg-slate-200 text-black translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none'>
                        {fileToText(props.file)}
                    </p>
                </div>
            );
        case ((props.side === "right") && (props.image === "none")):
            return(
            <div className={final_style2}>
                <div className='bg-slate-200 text-black -translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none'>
                    {fileToText(props.file)}
                </div>
            </div>
            )
        case ((props.side === "left") && (props.image !== "none")):
            let leftsecondstyle:string = "rounded-sm border-black border-2 animate-idle-left ";
            return(
            <div className={final_style2}>
                <div className={leftsecondstyle}>
                    <Image src={props.image} alt="alternatetext"/>
                    <div className='bg-slate-200 text-black -translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none'>
                        {fileToText(props.file)}
                    </div>
                </div>
            </div>
            )
        case ((props.side === "right") && (props.image !== "none")):
            let rightsecondstyle:string = "rounded-sm border-black border-2 animate-idle-right";
            return(
            <div className={final_style2}>
                <div className={rightsecondstyle}>
                    <Image src={props.image} alt="alternatetext" width={100} height={100}/>
                    <div className='bg-slate-200 text-black -translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none'>
                        {fileToText(props.file)}
                    </div>
                </div>
            </div>
            )
        default:
            return (<></>)
    }
}

export default TextBox;


