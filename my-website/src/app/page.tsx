import type { Metadata } from "next";
import React from "react";
import Displaybox from "./components/Displaybox";
import ContactMe from "./components/email";
import Navbar from "./components/Navbar";
import Imagebox from "./components/Imagebox";
import Projectbox from "./components/Projectbox";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my Website",
};

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col justify-between">
        <div className="h-screen bg-transparent ">
          {/** Navbar */}
          <div className="flex flex-col">
            <Navbar></Navbar>
          </div>
          {/** About Me */}
          <div className="inline-flex my-16" id="About_Me">
            <Displaybox
              content="I am currently a third year Software Enginner at Rochester Institute of Technology.
              I enjoy Fullstack development, but I prefer frontend soley because I get to bring my ideas to life."
              style="bg-red-500 w-2/6 h-2/6 md:w-3/6 md:h-3/6 sm:w-4/6 sm:h-3/6"
              side="left"
              initial={true}
            />
          </div>
          <div className="inline-flex flex-row-reverse">
            <Displaybox
              content="My coding journey is a long one, I had my first coding exposure with Scratch when I was around 10/11 years old.
              It wasn't until highschool when I re-developed my love for coding.
              I was so interested that I took college coding classes during the summer in order to learn more."
              style="bg-red-500 w-2/6 h-2/6 md:w-3/6 md:h-3/6 sm:w-4/6 sm:h-3/6"
              side="right"
              initial={true}
            />
          </div>
          <div className="inline-flex my-16">
            <Displaybox
              content="This desire to improve my skills has stuck me as I continue along my software development journey.
              As a matter of fact this website was my introduction into Nextjs and Tailwindcss!"
              style="bg-red-500 w-2/6 h-2/6 md:w-3/6 md:h-3/6 sm:w-4/6 sm:h-3/6 "
              side="left"
              initial={true}
            />
          </div>
          {/** About Me texhnology */}
          <Imagebox
            Images={
              new Map<string, string>([
                ["/python-icon.svg", "/10-python-icon.svg"],
                ["/java-icon.svg", "/10-java-icon.svg"],
                ["/flask.svg", "/10-flask.svg"],
                ["/javascript-icon.svg", "/10-javascript-icon.svg"],
                ["/typescript.svg", "/10-typescript.svg"],
                ["/postgresql.svg", "/10-postgresql.svg"],
                ["/next-js.svg", "/10-next-js.svg"],
                ["/react.svg", "/10-react.svg"],
                ["/nodejs-icon.svg", "/10-nodejs-icon.svg"],
                ["/docker-tile.svg", "/10-docker-tile.svg"],
              ])
            }
            styling={
              " invisible bg-red-500 w-9/12 h-7/12 my-16 rounded-sm border-black border-2 "
            }
            animation={"initial-load-left"}
            size={60}
            text={
              "These are the languages and libraries that I feel most comfortable using."
            }
            imageStyle={" bg-white rounded-2xl"}
            gridStyle={
              "grid-cols-5 grid place-content-center dark:bg-slate-500 gap-x-16 p-4"
            }
            linkStyle={" w-10/12 h-4/6 m-2 "}
          ></Imagebox>

          {/** Projects */}
          <div className="inline-flex my-16" id="Projects">
            <Displaybox
              content="Below Are My projects.
              For each one, I focused on a specific part of fulllstack development that I was not confident in.
              This allowed me to round out my skills as a developer as well as create fun and interesting projects!
              "
              style="bg-blue-500 w-2/6 h-2/6 md:w-3/6 md:h-3/6 sm:w-4/6 sm:h-3/6"
              side="left"
            />
          </div>
          <div className="inline-flex flex-row-reverse my-16">
            <Projectbox
              Images={
                new Map<string, string>([
                  [
                    "/css.svg",
                    "https://www.w3.org/Style/CSS/Overview.en.html#:~:text=Cascading%20Style%20Sheets%20(CSS)%20is,CSS%20and%20on%20available%20software.",
                  ],
                  ["/react.svg", "https://react.dev/"],
                ])
              }
              boxStyling={
                "bg-blue-500 w-9/12 h-full rounded-sm border-black border-2 "
              }
              side={"right"}
              text="This Project was my first introduction to frontend development, and I was hooked! 
              Using React components I created a timer that was able to:
              log times,
              edit times logged,
              change the name of the user who was using the timer (this will change the name displayed when time is logged), 
              It is important to note that this project has no backend, therefore I only allowed one user to be made."
              imageBoxStyling={
                "inline-flex bg-blue-200 rounded-sm border-black border-2 -translate-y-2 translate-x-4 gap-4"
              }
              imageStyle={"rounded-full bg-white md:bg-white md:rounded-md"}
              projectImage={"/React_client_page.jpeg"}
              projectLink={"https://github.com/ayden-boyko/React-Timer"}
            ></Projectbox>
          </div>
          <div className="inline-flex flex-row my-16">
            <Projectbox
              Images={
                new Map<string, string>([
                  ["/tailwind.svg", "https://tailwindcss.com/"],
                  ["/next-js.svg", "https://nextjs.org/"],
                ])
              }
              boxStyling={
                "bg-blue-500 w-9/12 h-full rounded-sm border-black border-2"
              }
              side={"left"}
              text="This Project is actually my personal website. It was made using Nextjs version 13 and tailwindcss. 
              Both of which I had no prior experience using so this was a big learning experience for me."
              imageBoxStyling={
                "inline-flex bg-blue-200 rounded-sm border-black border-2 -translate-y-2 -translate-x-4 gap-4"
              }
              imageStyle={"rounded-full bg-white"}
              projectImage={"/homepage.jpg"}
              projectLink={"https://github.com/ayden-boyko/Website"}
            ></Projectbox>
          </div>
          <div className="inline-flex flex-row-reverse my-16">
            <Projectbox
              Images={
                new Map<string, string>([
                  ["/postgresql2.svg", ""],
                  ["/flask.svg", ""],
                ])
              }
              boxStyling={
                "bg-blue-500 w-10/12 h-full rounded-sm border-black border-2 "
              }
              side={"right"}
              text="This project is a mock rideshare backend. The Database I used was Postgresql.
              The Api conforms to the REST architectural style. The api allows all information related to rider or driver to be accessed.
              The user can also view the reciepts for all their rides. The Database allows full functionality for a ridesharing app,
               this includes: creating/deleting accounts, finding rides, starting rides,
              carpooling, leaving reviews for riders and drivers and also responding to said reviews."
              imageBoxStyling={
                "inline-flex bg-blue-200 rounded-sm border-black border-2 -translate-y-2 translate-x-4 gap-4"
              }
              imageStyle={"rounded-full bg-white"}
              projectImage={"/React_client_page.jpeg"}
              projectLink={"https://github.com/ayden-boyko/React-Timer"}
            ></Projectbox>
          </div>
          {/** Contact */}
          <div className="pb-5" id="Contact">
            <div className="grid grid-cols-2 grid-rows-1 gap-64">
              <div>
                <Imagebox
                  Images={
                    new Map<string, string>([
                      [
                        "/discordapp.svg",
                        "https://discordapp.com/users/bb_tornado",
                      ],
                      [
                        "/linkedin.svg",
                        "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
                      ],
                    ])
                  }
                  styling={
                    " invisible bg-green-500 w-full h-10/12 rounded-sm border-black border-2 my-16 "
                  }
                  animation={"animate-left"}
                  text={"Reach out to me through these other ways"}
                  size={250}
                  imageStyle={" bg-white p-2 rounded-full "}
                  gridStyle={
                    "grid-cols-1 grid place-content-center dark:bg-slate-500 gap-x-16 "
                  }
                  linkStyle={"w-10/12 h-4/6 m-2 py-4 rounded-full "}
                ></Imagebox>
              </div>
              <div>
                <ContactMe style=" invisible rounded-sm border-black border-2 bg-green-500 my-16 w-full h-full md:w-full md:h-auto sm:w-4/6 sm:h-3/6"></ContactMe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
