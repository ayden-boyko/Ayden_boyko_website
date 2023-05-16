import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'About Me',
  description: 'Welcome to my ABout me page',
};

export default function about_Me () {

    return (
        <div className="h-screen bg-slate-500">
            <ul className="flex items-center justify-center translate-y-4">
                <li className="-mb-px mr-1 hover:px-3 duration-500 delay-75">
                    <a className="transition ease-in-out delay-150 duration-300 bg-yellow-500 inline-block py-2 px-4 text-black font-semibold rounded hover:scale-125 hover:shadow-lg " href="/Home">Welcome</a>
                </li>
                <li className="mr-1">
                    <a className="bg-red-500 inline-block  rounded py-2 px-4 text-black font-semibold" href="">About me</a>
                </li>
                <li className="mr-1 hover:px-3 duration-500 delay-75">
                    <a className="transition ease-in-out delay-150 duration-300 bg-blue-500 inline-block py-2 px-4 text-black font-semibold rounded hover:scale-125 hover:shadow-lg " href="/Projects">Projects</a>
                </li>
                <li className="mr-1 hover:px-3 duration-500 delay-75">
                    <a className="transition ease-in-out delay-150 duration-300 bg-green-500 inline-block py-2 px-4 text-black font-semibold rounded hover:scale-125 hover:shadow-lg " href="/Contact">Contact</a>
                </li>
            </ul>
            <body>

            </body>
        </div>
    )
}