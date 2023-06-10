import type { Metadata } from 'next';
import Displaybox from '../components/Displaybox';
import Image from "next/image";
import fileToText from '../components/fileToText';


 
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Welcome to my Projects page',
};

export default function projects () {

    return (
        <div className="h-screen bg-transparent ">
            <ul className="flex items-center justify-center translate-y-4 ">
                <li className="-mb-px mr-1 hover:px-3 duration-500 delay-75">
                    <a className="transition ease-in-out delay-150 duration-300 bg-yellow-500 text-center inline-block py-2 px-4 text-black font-semibold rounded hover:scale-125 hover:shadow-lg" href="/Home">Welcome</a>
                </li>
                <li className="mr-1 hover:px-3 duration-500 delay-75">
                    <a className="transition ease-in-out delay-150 duration-300 bg-red-500 inline-block py-2 px-4 text-black font-semibold rounded hover:scale-125 hover:shadow-lg" href="/About_Me">About me</a>
                </li>
                <li className="mr-1">
                    <a className="bg-blue-500 inline-block rounded py-2 px-4 text-black font-semibold" href="">Projects</a>
                </li>
                <li className="mr-1 hover:px-3 duration-500 delay-75">
                    <a className="transition ease-in-out delay-150 duration-300 bg-green-500 inline-block py-2 px-4 text-black font-semibold rounded hover:scale-125 hover:shadow-lg" href="/Contact">Contact</a>
                </li>
            </ul>
            <div className='inline-flex my-16'>
                <Displaybox file="../textboxData/Projects_text/MyProjects.txt" style="bg-blue-500 w-2/6 h-2/6 " side="left"/>
            </div>
            <div className='inline-flex flex-row-reverse my-16'>
                <div className="bg-blue-500 w-9/12 h-full rounded-sm border-black border-2 animate-idle-right">
                    <div className=" flex flex-row">
                        <a className=" w-10/12 h-4/6 m-2" href="https://github.com/ayden-boyko/React-Timer" aria-label="Website Repo" target="_blank" rel='noopener'><Image src="/React_client_page.jpeg" alt="First React Client" width={200} height={200} className="rounded-sm border border-black"/></a>
                        <div className='inline-flex bg-blue-200 rounded-sm border-black border-2 -translate-y-2 -translate-x-2 gap-4'>
                            <div className='flex scale-110 flex-col-reverse m-2'>
                                <a className=" w-10/12 h-4/6 m-2 py-4 rounded-full" href="https://react.dev/" aria-label="React homepage" target="_blank" rel='noopener'><Image src="/react.svg" alt="react Icon" width={250} height={200} className="rounded-full border bg-white"/></a>
                                <a className=" w-10/12 h-4/6 m-2 py-4 rounded-full" href="https://www.w3.org/Style/CSS/Overview.en.html#:~:text=Cascading%20Style%20Sheets%20(CSS)%20is,CSS%20and%20on%20available%20software." aria-label="Css" target="_blank" rel='noopener'><Image src="/css.svg" alt="css Icon" width={100} height={100} className="bg-white rounded-full scale-110"/></a>
                            </div>
                            <div className='bg-slate-200 text-black -translate-y-2 -translate-x-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 p-2 animate-none'>
                                {fileToText("../textboxData/Projects_text/Project1.txt")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='inline-flex flex-row my-16'>
                <div className="bg-blue-500 w-8/12 h-full rounded-sm border-black border-2 animate-idle-left">
                    <div className=" flex flex-row translate-x-4">
                        <div className='inline-flex bg-blue-200 rounded-sm border-black border-2 -translate-y-2 -translate-x-2 gap-4'>
                            <div className='bg-slate-200 text-black translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none'>
                                {fileToText("../textboxData/Projects_text/Project2.txt")}
                            </div>
                            <div className='flex scale-110 flex-col-reverse m-2'>
                                <a className=" w-10/12 h-4/6 my-2 py-4 rounded-full" href="https://tailwindcss.com/" aria-label="Tailwindcss homepage" target="_blank" rel='noopener'><Image src="/tailwind.svg" alt="tailwindcss Icon" width={200} height={200} className="rounded-full bg-white"/></a>
                                <a className=" w-10/12 h-4/6 my-2 py-4 rounded-full" href="https://nextjs.org/" aria-label="Nextjs homepage" target="_blank" rel='noopener'><Image src="/next-js.svg" alt="next Icon" width={200} height={200} className="rounded-full bg-white"/></a>
                            </div>
                        </div>
                        <a className=" w-10/12 h-4/6 my-4 ml-6" href="https://github.com/ayden-boyko/Website" aria-label="Website Repo" target="_blank" rel='noopener'><Image src="/homepage.jpg" alt="Website github" width={200} height={200} className="rounded-sm border border-black m-2"/></a>
                    </div>
                </div>
            </div>
            <div className='inline-flex flex-row-reverse my-16'>
                <div className="bg-blue-500 w-9/12 h-full rounded-sm border-black border-2 animate-idle-right">
                    <div className=" flex flex-row">
                        <a className=" w-10/12 h-4/6 m-2" href="https://github.com/ayden-boyko/React-Timer" aria-label="Website Repo" target="_blank" rel='noopener'><Image src="/React_client_page.jpeg" alt="First React Client" width={200} height={200} className="rounded-sm border border-black"/></a>
                        <div className='inline-flex bg-blue-200 rounded-sm border-black border-2 -translate-y-2 -translate-x-2 gap-4'>
                            <div className='flex scale-110 flex-col-reverse m-2'>
                                <a className=" w-10/12 h-4/6 m-2 py-4 rounded-full" href="" aria-label="Postgresql" target="_blank" rel='noopener'><Image src="/postgresql.svg" alt="Postgres Icon" width={250} height={200} className="bg-white p-3"/></a>
                                <a className=" w-10/12 h-4/6 m-2 py-4 rounded-full" href="" aria-label="Flask" target="_blank" rel='noopener'><Image src="/flask.svg" alt="Flask Icon" width={300} height={200} className="bg-white p-2 rounded-full"/></a>
                            </div>
                            <div className='bg-slate-200 text-black -translate-y-2 -translate-x-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 p-2 animate-none'>
                                {fileToText("../textboxData/Projects_text/Project3.txt")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}