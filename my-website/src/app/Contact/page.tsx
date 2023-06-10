import type { Metadata } from 'next';
import Displaybox from '../components/Displaybox';
import ContactMe from '../components/email';
 
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Welcome to my Contacts page',
};

export default function my_Contact () {

    return (
        <div className="h-screen bg-transparent">
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
            <div className='flex my-16'>
                <Displaybox file="../textboxData/Contact_text/Contact_Me.txt" style="bg-green-500 w-2/6 h-2/6" side="left"/>
            </div>
            <div className='flex flex-row-reverse my-16'>
                <ContactMe/>
            </div>
        </div>
    )
}