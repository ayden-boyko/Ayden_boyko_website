import type { Metadata } from 'next';
import Displaybox from '../api/Displaybox';

 
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
                <Displaybox file="../textboxData/Projects_text/MyProjects.txt" style="bg-blue-500 w-2/6 h-2/6 " side="left" image="none" size={0}/>
            </div>
            <div className='inline-flex flex-row-reverse'>
                <Displaybox file="../textboxData/Projects_text/Project1.txt" style="bg-blue-500 w-4/6 h-full" side="right" image='/homepage.jpg' size={200}/>
            </div>
        </div>
    )
}