import DarkModeButton from './DarkmodeButton'
import Providers from './Providers'
import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head/>
      <body className='bg-slate-300 dark:bg-slate-700 text-black dark:text-white mx-72'>
        <Providers>
          <DarkModeButton>{children}</DarkModeButton>
        </Providers>
      </body>
  </html>
  )
}


