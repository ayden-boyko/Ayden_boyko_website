import type { Metadata } from 'next';
import TextBox from '../TextBox';
 
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Welcome to my Contacts page',
};

export default function my_Contact () {

    return (
        <div className="h-screen bg-transparent dark:bg-slate-700">
            <ul className="flex items-center justify-center translate-y-4">
                <li className="-mb-px mr-1 hover:px-3 duration-500 delay-75">
                    <a className="transition ease-in-out delay-150 duration-300 bg-yellow-500 inline-block py-2 px-4 text-black font-semibold rounded hover:scale-125 hover:shadow-lg " href="/Home">Welcome</a>
                </li>
                <li className="mr-1 hover:px-3 duration-500 delay-75">
                    <a className="transition ease-in-out delay-150 duration-300 bg-red-500 inline-block py-2 px-4 text-black font-semibold rounded hover:scale-125 hover:shadow-lg " href="/About_Me">About me</a>
                </li>
                <li className="mr-1 hover:px-3 duration-500 delay-75">
                    <a className="transition ease-in-out delay-150 duration-300 bg-blue-500 inline-block py-2 px-4 text-black font-semibold rounded hover:scale-125 hover:shadow-lg " href="/Projects">Projects</a>
                </li>
                <li className="mr-1">
                    <a className="bg-green-500 inline-block rounded py-2 px-4 text-black font-semibold" href="">Contact</a>
                </li>
            </ul>
            <div className='inline-flex my-16'>
                <TextBox file="textboxData/Contact_text/Contact_Me.txt" style="bg-green-500" side="left"></TextBox>
            </div>
        </div>
    )
}