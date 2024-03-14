import React from "react";

export interface NavbarProps {
  currentPge: string;
  setCurrentPage: (currentPage: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPge, setCurrentPage }) => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <img
            src="https://www.dl.dropboxusercontent.com/scl/fi/5azfmy4pju7l6rm7hku5w/WordCue.png?rlkey=zljak0srtde1sm7zihxa6m2wf&dl=0"
            alt="word-cue"
            className="w-20 hover:cursor-pointer"
            onClick={() => setCurrentPage("Home")}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex flex-row space-x-6">
            <li
              className={`${
                currentPge === "Home"
                  ? "text-[#008080] font-bold"
                  : "text-black"
              } hover:text-[#008080] hover:cursor-pointer`}
              onClick={() => setCurrentPage("Home")}
            >
              Home
            </li>
            <li
              className={`${
                currentPge === "About"
                  ? "text-[#008080] font-bold"
                  : "text-black"
              } hover:text-[#008080] hover:cursor-pointer`}
              onClick={() => setCurrentPage("About")}
            >
              About
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
