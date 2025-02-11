import type { Metadata } from "next";
import React from "react";
import Displaybox from "./components/Displaybox";
import Navbar from "./components/Navbar";
import Imagebox from "./components/Imagebox";
import Projectbox from "./components/Projectbox";
import ContactMe from "./components/email";

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
              content="Welcome to my website. My name is Ayden Boyko, and I am a fourth-year Software Engineering student with a minor in applied statistics at Rochester Institute of Technology.  
              I aim to leverage my knowledge and industry experience to build scalable, efficient solutions and contribute to dynamic engineering teams. I view each problem as a new chance to grow, this mindset has led me to be a better programmer as well as discover interesting new libraries!"
              style="bg-red-400 dark:bg-red-700 2xl:w-4/6 2xl:h-2/6 xl:w-4/6 xl:h-4/6 lg:w-4/6 lg:h-4/6 md:w-4/6 md:h-auto sm:w-full sm:h-full "
              side="left"
              initial={true}
            />
          </div>
          <div className="inline-flex flex-row-reverse 2xl:my-10 2xl:-mx-5 xl:-mx-1 md:my-6 sm:my-6 sm:mt-24 min-[280px]:m-20">
            <Displaybox
              content="My journey into coding commenced at a young age, when I first delved into game development using Scratch around the age of 10 or 11. Although my initial passion waned after a few years, it was rekindled in the 10th grade during a computer science course. This renewed interest led me to pursue additional coding education, including college-level courses during summer breaks, to further enhance my skills."
              style="bg-red-400 dark:bg-red-700 2xl:w-3/6 2xl:h-2/6 xl:w-4/6 xl:h-4/6 lg:w-3/6 lg:h-4/6 md:w-4/6 md:h-auto sm:w-5/6 sm:h-3/6"
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
          <div className="inline-flex 2xl:my-10 2xl:-mx-5 xl:-mx-1 md:my-6 sm:my-6 sm:mt-24 min-[280px]:m-20 w-full">
            <Imagebox
              Images={
                new Map<string, string>([
                  ["/python-icon.svg", "https://www.python.org/"],
                  ["/mongodb.svg", "https://www.mongodb.com/"],
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
              imageStyle={" transition duration-500 bg-white rounded-2xl"}
              gridStyle={
                " transition duration-500 grid-cols-5 grid dark:bg-slate-500 place-items-center "
              }
              linkStyle={" 2xl:w-10/12 2xl:h-4/6 m-2 "}
            ></Imagebox>
          </div>

          {/** Experience */}
          <div
            className="inline-flex flex-row-reverse 2xl:my-10 2xl:-mx-5 xl:-mx-1 md:my-6 sm:my-6 sm:mt-24 min-[280px]:m-20"
            id="Experience"
          >
            <Displaybox
              content="As a fourth-year Software Engineering student at the Rochester Institute of Technology, I’ve had the opportunity to apply my skills in practical, hands-on environments. 
              Through various projects and internships, I’ve deepened my technical expertise and contributed to impactful, team-driven solutions."
              style="bg-yellow-400 dark:bg-yellow-700 2xl:w-4/6 2xl:h-2/6 xl:w-4/6 xl:h-4/6 lg:w-4/6 lg:h-4/6 md:w-4/6 md:h-auto sm:w-5/6 sm:h-3/6"
              side="right"
              initial={true}
            />
          </div>

          <div className="inline-flex 2xl:my-10 2xl:-mx-5 xl:-mx-1 md:my-6 sm:my-6 sm:mt-24 min-[280px]:m-20">
            <Projectbox
              Images={
                new Map<string, string>([
                  ["/GCS.svg", "https://cloud.google.com/storage"],
                  ["/flask.svg", "https://palletsprojects.com/p/flask/"],
                  ["/bootstrap.svg", "https://getbootstrap.com/"],
                  ["/gitlab.svg", "https://about.gitlab.com/"],
                  ["/docker-tile.svg", "https://docs.docker.com/get-started/"],
                ])
              }
              iconSize={150}
              backboxStyling={
                "bg-yellow-400 dark:bg-yellow-700 2xl:w-full 2xl:h-fit xl:w-10/12 xl:h-10/12 rounded-sm border-black border-2"
              }
              side={"left"}
              text={
                "During my internship at MyDataProduct, I leveraged my backend development skills to implement key features such as photo cropping and Google sign-in, improving both user experience and authentication workflows. \
                @@ I led requirements gathering meetings for GitLab issues and collaborated closely with team members to streamline issue resolution, driving more efficient problem-solving and better team alignment. \
                My active role in Agile practices helped ensure smooth project management and consistent progress. \
                @@ Additionally, I worked alongside the design team to revamp the frontend, enhancing the modularity of HTML components. \
                This redesign not only improved the flexibility and maintainability of the codebase but also resulted in a more intuitive and seamless user experience.\
                @@ My contributions positively impacted the team's overall productivity, reflecting my ability to deliver scalable, user-focused solutions."
              }
              secondBoxStyling={
                "inline-flex bg-yellow-200 dark:bg-yellow-500 rounded-sm border-black border-2 -translate-y-2 -translate-x-4 gap-4"
              }
              iconStyle={
                "2xl:-translate-x-2 xl:-translate-x-3 xl:scale-110 lg:-translate-x-3 lg:scale-125 md:scale-150 md:-translate-x-3 sm:-translate-x-3 sm:scale-150 sm:my-2 bg-white rounded-full"
              }
              projectImage={"/Deion.png"}
              projectImageSize={400}
              projectImageStyle="rounded-sm border-2 border-black m-2 2xl:-translate-x-03.5 xl:-translate-x-5 md:translate-y-0 sm:-translate-x-4"
              projectLink={"https://deion.io/"}
            />
          </div>

          {/** Projects */}
          <div
            className="inline-flex 2xl:my-10 2xl:-mx-5 xl:-mx-1 md:my-6 sm:my-6 sm:mt-24 min-[280px]:m-20"
            id="Projects"
          >
            <Displaybox
              content="Below are my projects.
              For each one, I focused on a specific part of fulllstack development that I was not confident in.
              This allowed me to round out my skills as a developer as well as create fun and interesting projects!
              "
              style="bg-lime-400 dark:bg-lime-700 2xl:w-4/6 2xl:h-2/6 xl:w-4/6 xl:h-4/6 lg:w-4/6 lg:h-4/6 md:w-4/6 md:h-auto sm:w-4/6 sm:h-3/6"
              side="left"
            />
          </div>
          <div className="inline-flex flex-row-reverse 2xl:my-10 2xl:-mx-5 xl:-mx-1 md:my-6 sm:my-6 sm:mt-24 min-[280px]:m-20">
            <Projectbox
              Images={
                new Map<string, string>([
                  ["/mongodb.svg", "https://www.mongodb.com/"],
                  ["/Express.svg", "https://expressjs.com/"],
                  ["/nodejs-icon.svg", "https://nodejs.org/en/about"],
                  ["/react.svg", "https://react.dev/"],
                  ["/tailwind.svg", "https://tailwindcss.com/"],
                ])
              }
              iconSize={150}
              backboxStyling={
                " bg-lime-400 dark:bg-lime-700 2xl:w-full 2xl:h-9/12 xl:w-11/12 xl:h-10/12 rounded-sm border-black border-2 "
              }
              side={"right"}
              text="This project is a full-stack chatroom application I developed using Node.js and Express for the backend, paired with MongoDB for data storage. The frontend is built with React and TypeScript, utilizing Shadcn and Tailwind CSS for sleek, responsive styling. The architecture allows for a seamless user experience with real-time communication.
                    @@ The chatroom employs WebSockets to facilitate instant messaging between users, ensuring that conversations flow smoothly without delays. 
                    @@For security, JWT (JSON Web Tokens) is implemented for both authorization and authentication, providing a robust system for user access. This application not only showcases my ability to create dynamic, interactive web applications but also emphasizes best practices in security and real-time data handling."
              secondBoxStyling={
                "inline-flex bg-lime-200 dark:bg-lime-400 rounded-sm border-black border-2 -translate-y-2 translate-x-4 gap-4  "
              }
              iconStyle={
                "rounded-full bg-white border-grey xl:scale-[.8] xl:-my-1 border-2 "
              }
              projectImage={"/chatroom_icon.svg"}
              projectImageSize={640}
              projectImageStyle="rounded-sm border-2 border-black m-2 xl:translate-x-1 xl:translate-y-0 md:translate-y-4 bg-white"
              projectLink={"https://github.com/ayden-boyko/MyChat"}
            ></Projectbox>
          </div>
          <div className="inline-flex flex-row 2xl:my-10 2xl:-mx-5 xl:-mx-1 md:my-6 sm:my-6 sm:mt-24 min-[280px]:m-20 2xl:w-full xl:w-full">
            <Projectbox
              Images={new Map<string, string>([["/c.svg", ""]])}
              iconSize={250}
              backboxStyling={
                "bg-lime-400 dark:bg-lime-700 2xl:w-full 2xl:h-full xl:w-full xl:h-10/12 lg:w-auto lg:h-auto rounded-sm border-black border-2 "
              }
              side={"left"}
              text="This project, developed for the STM WB55xx board, enabled Bluetooth functionality to allow advertising, secure connections, and message reception with external devices. 
              @ It involved a thorough understanding of STM documentation and Bluetooth Low Energy (BLE) protocols, particularly GATT. I implemented security measures to ensure reliable communication while addressing vulnerabilities. 
              @ This experience deepened my understanding of embedded systems and enhanced my ability to manage real-time data transmission effectively."
              secondBoxStyling={
                "inline-flex bg-lime-200 dark:bg-lime-500 rounded-sm border-black border-2 -translate-y-2 -translate-x-4 gap-4"
              }
              iconStyle={
                "2xl:-translate-x-2 xl:-translate-x-3 xl:scale-110 lg:-translate-x-3 lg:scale-125 md:scale-150 md:-translate-x-3 sm:-translate-x-3 sm:scale-150 sm:my-2"
              }
              projectImage={"/board.jpg"}
              projectImageSize={750}
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
                  ["/react.svg", "https://react.dev/"],
                ])
              }
              iconSize={250}
              backboxStyling={
                "bg-lime-400 dark:bg-lime-700 2xl:w-full 2xl:h-full xl:w-full xl:h-10/12 lg:w-auto lg:h-auto rounded-sm border-black border-2 "
              }
              side={"right"}
              text="This project is a complete rideshare application that I built using Python, SQL, JavaScript, HTML, and CSS. For the backend, I used a Supabase remote database alongside a RESTful Flask API, while the frontend is crafted in React with some basic CSS styling. The whole setup follows a classic MVC (Model-View-Controller) pattern, which keeps everything organized and manageable.

              @ The app lets users take on the roles of either drivers or riders. Riders can easily request rides to wherever they need to go, and drivers can browse and accept those requests. Once they're matched up, they can chat in real time to make sure everything goes smoothly.

              @ After a ride wraps up, the fare gets added to the rider’s tab automatically, making it super easy to keep track of costs. Plus, both drivers and riders can share their thoughts and feedback through a simple post-ride review system. This adds a personal touch and helps build a sense of community. Overall, this full-stack app blends a smooth user experience with solid backend support to create an effective rideshare platform."
              secondBoxStyling={
                "inline-flex bg-lime-200 dark:bg-lime-500 rounded-sm border-black border-2 -translate-y-2 translate-x-4 xl:ml-4 md:gap-2"
              }
              iconStyle={
                "rounded-full bg-white border-grey border-2 xl:scale-125 xl:my-2 xl:-translate-x-2 xl:translate-y-0 lg:-translate-x-2 lg:scale-125 lg:my-1 md:scale-150 md:-translate-x-1.5 md:my-1 "
              }
              projectImage={"/rideshare.svg"}
              projectImageSize={1250}
              projectImageStyle="rounded-sm border-2 border-black 2xl:m-2 lg:translate-x-3  lg:translate-y-0 md:translate-y-0 sm:translate-y-2 sm:translate-x-2"
              projectLink={
                "https://github.com/ayden-boyko/Full_stack_rideshare"
              }
            ></Projectbox>
          </div>
          {/* Contact */}
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
                    ["/github.svg", "https://github.com/ayden-boyko"],
                  ])
                }
                styling={
                  " invisible bg-teal-400 dark:bg-teal-700 2xl:w-10/12 2xl:h-10/12 rounded-sm border-black border-2 2xl:my-10 "
                }
                animation={"animate-left"}
                text={"Find me on these platforms"}
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
                    ["/resume.jpg", "/Ayden_Boyko_resume-1.pdf"],
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
          <div className=" w-7/12">
            <ContactMe
              styling={
                " invisible bg-teal-400 dark:bg-teal-700 2xl:w-10/12 2xl:h-10/12 rounded-sm border-black border-2 2xl:my-10"
              }
            ></ContactMe>
          </div>
          <br />
        </div>
      </div>
    </main>
  );
}
