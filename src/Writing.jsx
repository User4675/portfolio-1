import React from "react";
import "@fontsource/poppins";
import Star from "./Star";

function App() {
  const d = new Date();
  const currentYear = d.getFullYear();
  return (
    <main className="bg-[#121212] h-screen w-full font-['Poppins']">
      <nav className="fixed w-full top-0 z-50 flex flex-wrap items-center justify-between py-3 bg-[#181818] text-white shadow-lg">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div className="container-fluid">
            <a className="text-xl text-white font-semibold" href="/">
              User4675
            </a>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center flex-col h-screen">
        {/* Reviews section */}
        <h2 className="text-white text-2xl ">Writing Reviews</h2>

        <div className="flex flex-grow-0 flex-shrink-0 items-center justify-center pt-3 mx-auto">
          <div className="grid grid-cols-4 mx-auto gap-14">
            <div className="w-72 h-48 bg-[#181818] rounded-lg relative">
              <div className="flex flex-row items-center mt-5">
                <img
                  className="rounded-full ml-7 mr-4"
                  src="https://via.placeholder.com/50"
                  alt="Example User"
                />
                <h3 className="text-white font-bold text-lg">User4675#0001</h3>
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
                <h3 className="text-white font-bold text-lg">User4675#0001</h3>
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
                <h3 className="text-white font-bold text-lg">User4675#0001</h3>
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
                <h3 className="text-white font-bold text-lg">User4675#0001</h3>
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
                <h3 className="text-white font-bold text-lg">User4675#0001</h3>
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
                <h3 className="text-white font-bold text-lg">User4675#0001</h3>
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
                <h3 className="text-white font-bold text-lg">User4675#0001</h3>
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
                <h3 className="text-white font-bold text-lg">User4675#0001</h3>
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

        <footer className="flex fixed items-center justify-center bottom-4">
          <p className="text-white">Copyright &copy; {currentYear}, User4675</p>
        </footer>
      </div>
    </main>
  );
}

export default App;