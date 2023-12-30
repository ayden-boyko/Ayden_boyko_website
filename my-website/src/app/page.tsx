import type { Metadata } from "next";
import React from "react";
import Displaybox from "./components/Displaybox";
import Navbar from "./components/Navbar";
import Imagebox from "./components/Imagebox";
import Projectbox from "./components/Projectbox";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my personal software engineering website",
};

export default function Home() {
  return (
    <main>
      <div className="flex h-full w-full min-w-fit flex-col justify-between">
        <div className="h-screen bg-transparent">
          {/** Navbar */}

          <Navbar></Navbar>

          {/** About Me */}
          <div
            className="inline-flex 2xl:my-10 2xl:-mx-5 xl:-mx-1 md:my-6 sm:my-6 sm:mt-24 min-[280px]:m-20"
            id="About_Me"
          >
            <Displaybox
              content="Hello and welcome to my website! My name is Ayden Boyko. 
              I am currently a third year Software Enginner at Rochester Institute of Technology.
              I enjoy Fullstack development, and experimenting with new technologies"
              style="bg-red-400 dark:bg-red-700 2xl:w-3/6 2xl:h-2/6 xl:w-4/6 xl:h-4/6 lg:w-4/6 lg:h-4/6 md:w-5/6 md:h-auto sm:w-full sm:h-full "
              side="left"
              initial={true}
            />
          </div>
          <div className="inline-flex flex-row-reverse 2xl:my-10 2xl:-mx-5 xl:-mx-1 md:my-6 sm:my-6 sm:mt-24 min-[280px]:m-20">
            <Displaybox
              content="My coding journey began when I was very young. I learned how to make games with Scratch when I was around 10/11 years old.
              I continued to do so for a couple more years before falling out of love with it.
              It wasn't until the 10th grade when I re-developed my love for coding during a computer science class.
              I was so interested that I took college coding classes during the summer in order to learn more."
              style="bg-red-400 dark:bg-red-700 2xl:w-2/6 2xl:h-2/6 xl:w-4/6 xl:h-4/6 lg:w-4/6 lg:h-4/6 md:w-5/6 md:h-auto sm:w-5/6 sm:h-3/6"
              side="right"
              initial={true}
            />
          </div>
          <div className="inline-flex 2xl:my-10 2xl:-mx-5 xl:-mx-1 md:my-6 sm:my-6 sm:mt-24 min-[280px]:m-20">
            <Displaybox
              content="This love of coding has stuck with me as I continue my software development journey.
              As a matter of fact this website was my introduction into Nextjs and Tailwindcss!"
              style="bg-red-400 dark:bg-red-700 2xl:w-2/6 2xl:h-2/6 xl:w-4/6 xl:h-4/6 lg:w-4/6 lg:h-4/6 md:w-5/6 md:h-auto sm:w-4/6 sm:h-3/6 "
              side="left"
              initial={true}
            />
          </div>
          {/** About Me technology */}
          <Imagebox
            Images={
              new Map<string, string>([
                ["/python-icon.svg", "https://www.python.org/"],
                [
                  "/java-icon.svg",
                  "https://www.java.com/en/download/help/whatis_java.html",
                ],
                ["/javascript-icon.svg", "https://www.javascript.com/"],
                ["/typescript.svg", "https://www.typescriptlang.org/"],
                ["/flask.svg", "https://palletsprojects.com/p/flask/"],
                [
                  "/postgresql.svg",
                  "https://www.postgresql.org/docs/current/intro-whatis.html",
                ],
                ["/next-js.svg", "https://nextjs.org/docs"],
                ["/react.svg", "https://react.dev/"],
                ["/nodejs-icon.svg", "https://nodejs.org/en/about"],
                ["/docker-tile.svg", "https://docs.docker.com/get-started/"],
              ])
            }
            styling={
              " transition duration-1000 invisible bg-red-400 dark:bg-red-700 2xl:w-9/12 2xl:h-7/12 2xl:my-10 xl:w-11/12 xl:h-10/12 xl:my-6 lg:w-11/12 lg:h-10/12 lg:my-6 sm:my-6 place-content-center rounded-sm border-black border-2 "
            }
            animation={"initial-load-left"}
            size={60}
            text={
              "These are the languages and libraries that I feel most comfortable using."
            }
            imageStyle={" transition duration-1000 bg-white rounded-2xl"}
            gridStyle={
              " transition duration-1000 grid-cols-5 grid dark:bg-slate-500 translate-x-16 "
            }
            linkStyle={" 2xl:w-10/12 2xl:h-4/6 m-2 "}
          ></Imagebox>

          {/** Projects */}
          <div
            className="inline-flex 2xl:my-10 2xl:-mx-5 xl:-mx-1 md:my-6 sm:my-6 sm:mt-24 min-[280px]:m-20"
            id="Projects"
          >
            <Displaybox
              content="Below Are My projects.
              For each one, I focused on a specific part of fulllstack development that I was not confident in.
              This allowed me to round out my skills as a developer as well as create fun and interesting projects!
              "
              style="bg-lime-400 dark:bg-lime-700 2xl:w-2/6 2xl:h-2/6 xl:w-4/6 xl:h-4/6 lg:w-4/6 lg:h-4/6 md:w-5/6 md:h-auto sm:w-4/6 sm:h-3/6"
              side="left"
            />
          </div>
          <div className="inline-flex flex-row-reverse 2xl:my-10 2xl:-mx-5 xl:-mx-1 md:my-6 sm:my-6 sm:mt-24 min-[280px]:m-20">
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
              iconSize={300}
              backboxStyling={
                " bg-lime-400 dark:bg-lime-700 2xl:w-9/12 2xl:h-9/12 xl:w-11/12 xl:h-10/12 rounded-sm border-black border-2 "
              }
              side={"right"}
              text="This project was my first introduction to frontend development, and I was hooked! 
              Using React components I created a timer that was able to:
              log times,
              edit times logged,
              change the name of the user who was using the timer (this will change the name displayed when time is logged), 
              It is important to note that this project has no backend, as a result I did not save users and the times they logged."
              secondBoxStyling={
                "inline-flex bg-lime-200 dark:bg-lime-400 rounded-sm border-black border-2 -translate-y-2 translate-x-4 gap-4  "
              }
              iconStyle={
                "rounded-full bg-white border-grey xl:scale-[.8] xl:-my-1 border-2 "
              }
              projectImage={"/React_client_page.jpeg"}
              projectImageSize={640}
              projectImageStyle="rounded-sm border-2 border-black m-2 xl:translate-x-1 xl:translate-y-0 md:translate-y-4"
              projectLink={"https://github.com/ayden-boyko/React-Timer"}
            ></Projectbox>
          </div>
          <div className="inline-flex flex-row 2xl:my-10 2xl:-mx-5 xl:-mx-1 md:my-6 sm:my-6 sm:mt-24 min-[280px]:m-20">
            <Projectbox
              Images={new Map<string, string>([["/c.svg", ""]])}
              iconSize={150}
              backboxStyling={
                "bg-lime-400 dark:bg-lime-700 2xl:w-8/12 2xl:h-3/4 xl:w-10/12 xl:h-10/12 rounded-sm border-black border-2"
              }
              side={"left"}
              text="This project was created for a stm board, model wb55xx. It allows to board to advertise over bluetooth, connect to a device, 
              and receive messages from the connected device"
              secondBoxStyling={
                "inline-flex bg-lime-200 dark:bg-lime-500 rounded-sm border-black border-2 -translate-y-2 -translate-x-4 gap-4"
              }
              iconStyle={
                "2xl:-translate-x-2 xl:-translate-x-3 xl:scale-110 lg:-translate-x-3 lg:scale-125 md:scale-150 md:-translate-x-3 sm:-translate-x-3 sm:scale-150 sm:my-2"
              }
              projectImage={"/board.jpg"}
              projectImageSize={400}
              projectImageStyle="rounded-sm border-2 border-black m-2 2xl:-translate-x-03.5 xl:-translate-x-5 md:translate-y-0 sm:-translate-x-4"
              projectLink={"https://github.com/ayden-boyko/BLE_Messenger"}
            ></Projectbox>
          </div>
          <div className="inline-flex flex-row-reverse 2xl:my-10 2xl:-mx-5 xl:-mx-1 md:my-6 sm:my-6 sm:mt-24 min-[280px]:m-20">
            <Projectbox
              Images={
                new Map<string, string>([
                  [
                    "/postgresql2.svg",
                    "https://www.postgresql.org/docs/current/intro-whatis.html",
                  ],
                  ["/flask.svg", "https://palletsprojects.com/p/flask/"],
                ])
              }
              iconSize={250}
              backboxStyling={
                "bg-lime-400 dark:bg-lime-700 2xl:w-9/12 2xl:h-full xl:w-10/12 xl:h-10/12 lg:w-auto lg:h-auto rounded-sm border-black border-2 "
              }
              side={"right"}
              text="This project is a mock rideshare backend. I used Python, Flask, and PostgreSQL.
              The Api conforms to the REST architectural style. The api allows all information related to rider or driver to be accessed.
              The user can also view the reciepts for all their rides. The Database allows full functionality for a ridesharing app,
              this includes: creating/deleting accounts, finding rides, starting rides,
              carpooling, leaving reviews for riders and drivers, and also responding to reviews."
              secondBoxStyling={
                "inline-flex bg-lime-200 dark:bg-lime-500 rounded-sm border-black border-2 -translate-y-2 translate-x-4 xl:ml-4 md:gap-2"
              }
              iconStyle={
                "rounded-full bg-white border-grey border-2 xl:scale-125 xl:my-2 xl:-translate-x-2 xl:translate-y-0 lg:-translate-x-2 lg:scale-125 lg:my-1 md:scale-150 md:-translate-x-1.5 md:my-1 "
              }
              projectImage={"/rideshare.svg"}
              projectImageSize={750}
              projectImageStyle="rounded-sm border-2 border-black 2xl:m-2 lg:translate-x-3  lg:translate-y-0 md:translate-y-0 sm:translate-y-2 sm:translate-x-2"
              projectLink={"https://github.com/ayden-boyko/React-Timer"}
            ></Projectbox>
          </div>
          {/** Contact */}
          <div
            className="pb-5 grid grid-cols-2 grid-rows-1 2xl:gap-64 2xl:my-10 xl:my-6 xl:gap-32 lg:gap-24 lg:my-6 md:gap-14 sm:my-6 sm:gap-10"
            id="Contact"
          >
            <div>
              <Imagebox
                Images={
                  new Map<string, string>([
                    [
                      "/linkedin.svg",
                      "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
                    ],
                    ["/github.svg", "github.com/ayden-boyko"],
                  ])
                }
                styling={
                  " invisible bg-teal-400 dark:bg-teal-700 2xl:w-10/12 2xl:h-10/12 rounded-sm border-black border-2 2xl:my-10 "
                }
                animation={"animate-left"}
                text={
                  "Reach out to me through these other ways. aydenboyko@gmail.com"
                }
                size={125}
                imageStyle={
                  "transition ease-in delay-100 duration-1000 bg-white p-2 rounded-full border-black border-double border-4 hover:border-4 hover:border-solid"
                }
                gridStyle={
                  "flex flex-col items-center dark:bg-slate-500 2xl:gap-2 md:gap-2"
                }
                linkStyle={"2xl:w-10/12 2xl:h-4/6 m-2 py-4 rounded-full "}
              ></Imagebox>
            </div>

            <div>
              <Imagebox
                Images={
                  new Map<string, string>([
                    ["/resume.jpg", "https://discordapp.com/users/bb_tornad"],
                  ])
                }
                styling={
                  " invisible bg-teal-400 dark:bg-teal-700 2xl:w-10/12 2xl:h-10/12 rounded-sm border-black border-2 2xl:my-10 "
                }
                animation={"animate-right"}
                text={"Below Is my resume"}
                size={350}
                imageStyle={" bg-white p-2 border-2 border-black "}
                gridStyle={
                  "flex flex-col items-center dark:bg-slate-500 2xl:gap-16 md:gap-2"
                }
                linkStyle={"2xl:w-10/12 2xl:h-4/6 m-2 py-4 rounded-full "}
              ></Imagebox>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
