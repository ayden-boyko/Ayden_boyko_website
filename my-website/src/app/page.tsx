import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className=" border-black border-solid bg-yellow-500"> 
          <Link href="/Home" >
            <p>welcome</p>
          </Link>
        </div>
        <div className=" border-black border-solid bg-red-500">
          <Link href="/About_Me" >
            <p>About me</p>
          </Link>
        </div>
        <div className=" border-black border-solid bg-blue-400">
          <Link href="/Projects" >
            <p>projects</p>
          </Link>
        </div>
        <div className=" border-black border-solid bg-green-500">
          <Link href="/Contact" >
            <p>contact</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
