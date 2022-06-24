import Terminal from "./console/Terminal";
import React from "react";
import "@fontsource/poppins";
// https://react-icons.github.io/react-icons
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import Star from "./Star";

const commands = {
  aboutme: {
    description: "My description.",
    fn: () => {
      return "Stuff\nAbout Me.";
    },
  },
  links: {
    description: "My links.",
    fn: () => {
      return "Link A\nLink B\nLink C";
    },
  },
  projects: {
    description: "My projects.",
    fn: () => {
      return "Project A\nProject B\nProject C";
    },
  },
  skills: {
    description: "My skills.",
    fn: () => {
      return "Skill A\nSkill B\nSkill C";
    },
  },
  reviews: {
    description: "My reviews.",
    fn: () => {
      return "Review A\nReview B\nReview C";
    },
  },
  sudo: {
    description: "Run a command as root.",
    fn() {
      if (Array.from(arguments)[0] === "shutdown") {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        return "Nice try";
      } else {
        return "Command not found";
      }
    },
  },
  shutdown: {
    description: "Shutdown the website.",
    fn: () => {
      return 'Requires permission "root"';
    },
  },
};

function App() {
  const [showTerminal, setShowTerminal] = React.useState(false);
  const d = new Date();
  const currentYear = d.getFullYear();
  return (
    <main className="bg-[#121212] font-['Poppins']">
      <nav className="sticky w-full top-0 z-50 flex flex-wrap items-center justify-between py-3 bg-[#181818] text-white shadow-lg">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div className="container-fluid">
            <a className="text-xl text-white font-semibold" href="/">
              User4675
            </a>
          </div>
        </div>
      </nav>
      <div className="fixed bottom-0 w-full">
        <button
          className="my-3 mx-3 float-right px-3 py-3 bg-blue-600 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none"
          onClick={() =>
            showTerminal ? setShowTerminal(false) : setShowTerminal(true)
          }
        >
          {showTerminal ? "Basic" : "Advanced"}
        </button>
      </div>
      {showTerminal ? (
        <div className="flex justify-center items-center h-screen flex-col ">
          <div className="w-[50rem] h-6 rounded-t-xl bg-[#363238] items-center flex text-center">
            <div className="h-3 w-3 bg-[#ff6259] rounded-full ml-2" />
            <div className="h-3 w-3 bg-[#ffc13d] rounded-full ml-2" />
            <div className="h-3 w-3 bg-[#17c94b] rounded-full ml-2" />
          </div>
          <Terminal
            style={{
              height: "450px",
              width: "800px",
              backgroundColor: "#1e1e1e",
            }}
            commands={commands}
            welcomeMessage=" Welcome to user4675.com!\nType 'help' to see a list of commands."
            promptLabel={
              <>
                <b className="text-blue-600">me@User4675</b>
                <b>:~$</b>
              </>
            }
            autoFocus
          />
          <footer className="flex items-center justify-center bottom-4 fixed">
            <p className="text-white">
              Copyright &copy; {currentYear}, User4675
            </p>
          </footer>
        </div>
      ) : (
        <div className="bg-[#121212]  flex justify-center items-center flex-col">
          <h1 className="text-white font-bold text-6xl pb-3 pt-44">User4675</h1>
          <h2 className="text-white font-bold text-2xl">
            Professional Air Breather
          </h2>
          <h3 className="text-white font-bold text-1xl text-center pt-3">
            Welcome to my portfolio!
            <br />
            Not entirely sure why you're here but have a look around.
            <br />
            There is even an ADVANCED mode
          </h3>
          <div className="flex flex-row items-center">
            <a
              className="mx-3 my-3 px-4 py-4 bg-blue-600 text-white  font-bold tracking-wide rounded-full focus:outline-none"
              href="https://youtube.com/user4675"
            >
              <AiFillYoutube />
            </a>
            <a
              className="mx-3 my-3 px-4 py-4 bg-blue-600 text-white  font-bold tracking-wide rounded-full focus:outline-none"
              href="https://twitter.com/ttv_user4675"
            >
              <AiOutlineTwitter />
            </a>
            <a
              className="mx-3 my-3 px-4 py-4 bg-blue-600 text-white  font-bold tracking-wide rounded-full focus:outline-none"
              href="https://discord.gg/freelance"
            >
              <FaDiscord />
            </a>
          </div>
          {/* Projects section */}
          <h2 className="text-white text-2xl pt-20">Projects</h2>
          <div className="flex items-center justify-center pt-3 mx-auto ">
            <div className="grid grid-cols-3 mx-auto gap-20">
              <a
                className="w-72 h-72 rounded-lg relative "
                href="https://discord.gg/freelance"
              >
                <div className="absolute inset-0 bg-cover bg-center z-0 rounded-lg bg-[url(https://user4675.me/uGE3m6.png)]" />
                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center flex-col text-center">
                  <h4 className="text-purple font-bold text-xl">Aspect Services</h4>
                  <p className="text-purple text-base">
                    My very own service team! (Releasing soon)
                  </p>
                </div>
              </a>
              <a
                className="w-72 h-72 rounded-lg relative"
                href="https://google.com"
              >
                <div className="absolute inset-0 bg-cover bg-center z-0 rounded-lg bg-[url(https://via.placeholder.com/300)]" />
                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center flex-col text-center">
                  <h4 className="text-white font-bold text-xl">Project 2</h4>
                  <p className="text-white text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </a>
              <a
                className="w-72 h-72 relative rounded-lg"
                href="https://google.com"
              >
                <div className="absolute inset-0 bg-cover bg-center z-0 rounded-lg bg-[url(https://via.placeholder.com/300)]" />
                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center flex-col text-center">
                  <h4 className="text-white font-bold text-xl">Project 3</h4>
                  <p className="text-white text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </a>
            </div>
          </div>
          {/* Skills section */}
          <h2 className="text-white text-2xl pt-20">Skills</h2>
          <div className="flex items-center justify-center pt-3 mx-auto ">
            <div className="grid grid-cols-4 mx-auto gap-16">
              <a className="w-60 h-60 rounded-lg relative" href="/setups">
                <div className="absolute inset-0 bg-cover bg-center z-0 rounded-lg bg-[url(https://via.placeholder.com/300)]" />
                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center flex-col text-center">
                  <h4 className="text-white font-bold text-xl">
                    Minecraft Setups
                  </h4>
                  <p className="text-white text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </a>
              <a className="w-60 h-60 rounded-lg relative" href="/sysadmin">
                <div className="absolute inset-0 bg-cover bg-center z-0 rounded-lg bg-[url(https://via.placeholder.com/300)]" />
                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center flex-col text-center">
                  <h4 className="text-white font-bold text-xl">
                    System Administration
                  </h4>
                  <p className="text-white text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </a>
              <a className="w-60 h-60 relative rounded-lg" href="/">
                <div className="absolute inset-0 bg-cover bg-center z-0 rounded-lg bg-[url(https://via.placeholder.com/300)]" />
                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center flex-col text-center">
                  <h4 className="text-white font-bold text-xl">Skill 3</h4>
                  <p className="text-white text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </a>
              <a className="w-60 h-60 relative rounded-lg" href="/">
                <div className="absolute inset-0 bg-cover bg-center z-0 rounded-lg bg-[url(https://via.placeholder.com/300)]" />
                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center flex-col text-center">
                  <h4 className="text-white font-bold text-xl">Skill 4</h4>
                  <p className="text-white text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </a>
            </div>
          </div>
          {/* Reviews section */}
          <h2 className="text-white text-2xl pt-20">Reviews</h2>

          <div className="flex flex-grow-0 flex-shrink-0 items-center justify-center pt-3 mx-auto">
            <div className="grid grid-cols-3 grid-rows-1 mx-auto gap-20">
              <div className="w-72 h-48 bg-[#181818] rounded-lg relative">
                <div className="flex flex-row items-center mt-5">
                  <img
                    className="rounded-full ml-7 mr-4"
                    src="https://via.placeholder.com/50"
                    alt="Example User"
                  />
                  <h3 className="text-white font-bold text-lg">
                    User4675#0001
                  </h3>
                </div>
                <div className="flex justify-center items-center flex-col text-center mt-2">
                  <ul className="flex justify-center mb-2">
                    <Star isOn={true} />
                    <Star isOn={true} />
                    <Star isOn={true} />
                    <Star isOn={true} />
                    <Star isOn={false} />
                  </ul>
                  <p className="text-white text-base">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  </p>
                </div>
              </div>
              <div className="w-72 h-48 bg-[#181818] rounded-lg relative">
                <div className="flex flex-row items-center mt-5">
                  <img
                    className="rounded-full ml-7 mr-4"
                    src="https://via.placeholder.com/50"
                    alt="Example User"
                  />
                  <h3 className="text-white font-bold text-lg">
                    User4675#0001
                  </h3>
                </div>
                <div className="flex justify-center items-center flex-col text-center mt-2">
                  <ul className="flex justify-center mb-2">
                    <Star isOn={true} />
                    <Star isOn={true} />
                    <Star isOn={true} />
                    <Star isOn={true} />
                    <Star isOn={false} />
                  </ul>
                  <p className="text-white text-base">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  </p>
                </div>
              </div>
              <div className="w-72 h-48 bg-[#181818] rounded-lg relative">
                <div className="flex flex-row items-center mt-5">
                  <img
                    className="rounded-full ml-7 mr-4"
                    src="https://via.placeholder.com/50"
                    alt="Example User"
                  />
                  <h3 className="text-white font-bold text-lg">
                    User4675#0001
                  </h3>
                </div>
                <div className="flex justify-center items-center flex-col text-center mt-2">
                  <ul className="flex justify-center mb-2">
                    <Star isOn={true} />
                    <Star isOn={true} />
                    <Star isOn={true} />
                    <Star isOn={true} />
                    <Star isOn={false} />
                  </ul>
                  <p className="text-white text-base">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <footer className="flex items-center justify-center pt-12 pb-4">
            <p className="text-white">
              Copyright &copy; {currentYear}, User4675
            </p>
          </footer>
        </div>
      )}
    </main>
  );
}

export default App;
