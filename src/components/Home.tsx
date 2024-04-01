import axios from "axios";
import React, { useState } from "react";

export interface HomeProps {
  currentPage: string;
  setCurrentPage: (currentPage: string) => void;
}

interface ApiResponse {
  gloss: {
    input: string;
    selected_gloss: string;
    target: string;
  };
  message: string;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const [sentence, setSentence] = useState("");
  const [startID, setStartID] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modelNumber, setModelNumber] = useState("./Sent_CLS_WS");
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  // const [data, setData] = useState([{}]);

  const handleSubmit = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.post("http://127.0.0.1:8080/api/infer", {
        input: sentence,
        target_start_id: parseInt(startID),
        model_number: modelNumber,
      });

      setApiResponse(response.data);
      setCurrentPage("Results");
    } catch (error) {
      console.error("Error sending data to the API:", error);
      setApiResponse(null);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  const isSubmitDisabled = !sentence || !startID;

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
        <div className="flex items-center justify-center flex-col">
          <textarea
            className="form-textarea mt-1 block w-full h-96 resize-none rounded-lg p-4 border border-[#008080] shadow-sm focus:border-green-400 focus:ring-green-400"
            placeholder="Enter your sentence here..."
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
          />
          <div className="flex mt-4 space-x-4">
            <input
              type="number"
              className="form-input block w-full max-w-xs resize-none rounded-lg p-2 border border-[#008080] shadow-sm focus:border-green-400 focus:ring-green-400"
              placeholder="Target Word Location"
              value={startID}
              onChange={(e) => setStartID(e.target.value)}
            />
            {/* Dropdown for selecting the model number */}
            <select
              className="form-select block w-full max-w-xs rounded-lg border border-[#008080] shadow-sm focus:border-green-400 focus:ring-green-400"
              value={modelNumber}
              onChange={(e) => setModelNumber(e.target.value)}
            >
              <option value="./Sent_CLS_WS">WSD CLS</option>
              <option value="results/sent_cls_ws/1314/4">
                WSD CLS 100 Lemmas
              </option>
              <option value="results/content/results_ner_syn/4">
                WSD NER SYN 100 Lemmas
              </option>
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className={`rounded-full px-5 py-2 flex items-center justify-center ${
              isSubmitDisabled || isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-800 hover:bg-gray-600"
            } text-white`}
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
          >
            {isLoading ? (
              <div className="loader"></div> // This is your spinner
            ) : (
              "Submit"
            )}
          </button>
        </div>
        {apiResponse && (
          <div className="results-section mt-8">
            <h2 className="text-2xl font-semibold text-[#008080]">Results</h2>
            <div className="mt-4">
              <p className="text-xl">
                <strong>Input:</strong> {apiResponse.gloss.input}
              </p>
              <p className="text-xl">
                <strong className="font-[#808080]">Selected Gloss:</strong>{" "}
                {apiResponse.gloss.selected_gloss}
              </p>
              <p className="text-xl">
                <strong>Target:</strong> {apiResponse.gloss.target}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
