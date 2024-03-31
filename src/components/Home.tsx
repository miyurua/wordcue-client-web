import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [sentence, setSentence] = useState("");

  const [data, setData] = useState([{}]);

  const handleSubmit = async () => {
    const response = await fetch("/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sentence }),
    });
    const data = await response.json();
    console.log(data); // Handle or display the response data as needed
  };

  useEffect(() => {
    fetch("/sample")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  console.log(data);

  return (
    <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#008080] h-screen">
      <div className="flex items-center justify-center md:w-1/2 p-4">
        <div className="flex flex-col space-y-4 md:items-start items-center">
          <h1 className="text-5xl md:text-8xl font-semibold text-[#008080]">
            Disambiguation
          </h1>
          <h1 className="text-5xl md:text-8xl font-semibold text-gray-800">
            Made Easy
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 p-4 space-y-6 justify-center md:pl-11">
        <div className="flex items-center justify-center">
          <textarea
            className="form-textarea mt-1 block w-full h-96 resize-none rounded-lg p-4 border border-[#008080] shadow-sm focus:border-green-400 focus:green-400"
            placeholder="Enter your sentence here..."
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="rounded-full bg-gray-800 text-white px-5 py-2 hover:bg-gray-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
