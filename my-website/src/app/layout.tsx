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
      <body className=" transition duration-1000 ease-in-out bg-[url('../app/icons/lightgrid.svg')] dark:bg-[url('../app/icons/darkgrid.svg')] bg-slate-300  dark:text-white mx-72">
        <Providers>
          <DarkModeButton id="darkmodebutton">{children}</DarkModeButton>
        </Providers>
      </body>
    </html>
  );
}
