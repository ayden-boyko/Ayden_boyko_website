import Providers from './Providers'
import DarkModeButton from './api/DarkmodeButton'
import './globals.css'

//bg-[url('../app/icons/lightgrid.svg')] dark:bg-[url('../app/icons/darkgrid.svg')] grid background, needs to be changed

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head/>
      <body className=" bg-[url('../app/icons/lightgrid.svg')] bg-slate-300 dark:bg-[url('../app/icons/darkgrid.svg')] dark:bg-slate-700 dark:text-white mx-72">
        <Providers>
          <div className="">
            <DarkModeButton>{children}</DarkModeButton>
          </div>
        </Providers>
      </body>
  </html>
  )
}


