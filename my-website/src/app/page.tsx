import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid items-center justify-center grid-rows-2 grid-flow-col gap-4 translate-y-40 ">
        <a href="/Home">
          <div className=" border-black border-solid bg-yellow-500 w-40 h-40 relative rounded p-10 text-center inline-block hover:shadow-xl hover:-translate-y-1 duration-300"> 
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Welcome</p>
          </div>
        </a>
        <a href="/About_Me">
          <div className=" border-black border-solid bg-red-500 w-40 h-40 relative rounded p-10 text-center inline-block hover:shadow-xl hover:-translate-y-1 duration-300">
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">About me</p>
          </div>
        </a>
        <a href="/Projects">
          <div className=" border-black border-solid bg-blue-400 w-40 h-40 relative rounded p-10 text-center inline-block hover:shadow-xl hover:-translate-y-1 duration-300">
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">projects</p>
          </div>
        </a>
        <a href="/Contact">
          <div className=" border-black border-solid bg-green-500 w-40 h-40 relative rounded p-10 text-center inline-block hover:shadow-xl hover:-translate-y-1 duration-300">
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">contact</p>
          </div>
        </a>
      </div>
    </main>
  )
}
