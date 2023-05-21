import type { Metadata } from 'next';
import TextBox from '../api/TextBox';
 
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
                <TextBox file="textboxData/Projects_text/MyProjects.txt" style="bg-blue-500" side="left"></TextBox>
            </div>
            <div className='inline-flex flex-row-reverse'>
                <TextBox file="textboxData/Projects_text/Project1.txt" style="bg-blue-500" side="right"></TextBox>
            </div>
        </div>
    )
}