import { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  document.body.className = "bg-[#f5fdf1]";

  return (
    <div
      className={`flex flex-col h-screen container m-auto px-4 py-6 space-y-6`}
    >
      {/* <div className="flex flex-col h-screen space-between"> */}
      <Navbar currentPge={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "Home" ? <Home /> : <About />}
      <Footer />
    </div>
    // </div>
  );
};

export default App;
