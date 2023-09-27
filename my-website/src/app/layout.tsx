import Providers from "./Providers";
import DarkModeButton from "./components/DarkmodeButton";
import "./globals.css";

//bg-[url('../app/icons/lightgrid.svg')] dark:bg-[url('../app/icons/darkgrid.svg')] grid background, needs to be changed

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className=" transition-all duration-1000 delay-100 bg-[url('../app/icons/lightgrid.svg')] dark:bg-[url('../app/icons/darkgrid.svg')] bg-slate-300  dark:text-white sm:mx-10 md:mx-32 xl:mx-44 2xl:mx-72 ">
        <Providers>
          <DarkModeButton id="darkmodebutton">{children}</DarkModeButton>
        </Providers>
      </body>
    </html>
  );
}
