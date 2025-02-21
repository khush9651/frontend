import React, { useState } from "react";

const ResponseDisplay = ({ responseData }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const filteredResponse = () => {
    let result = {};
    if (selectedOptions.includes("Alphabets")) result.alphabets = responseData.alphabets;
    if (selectedOptions.includes("Numbers")) result.numbers = responseData.numbers;
    if (selectedOptions.includes("Highest Alphabet")) result.highest_alphabet = responseData.highest_alphabet;
    return result;
  };

  return (
    <div className="w-full max-w-lg bg-white text-black p-5 shadow-lg rounded-lg mt-5">
      <h2 className="text-xl font-semibold mb-3">Response</h2>
      
      <select
        multiple
        className="w-full p-2 border border-gray-300 rounded"
        onChange={(e) => setSelectedOptions([...e.target.selectedOptions].map(opt => opt.value))}
      >
        <option value="Alphabets">Alphabets</option>
        <option value="Numbers">Numbers</option>
        <option value="Highest Alphabet">Highest Alphabet</option>
      </select>

      <div className="mt-3">
        <pre className="bg-gray-100 p-3 rounded">{JSON.stringify(filteredResponse(), null, 2)}</pre>
      </div>
    </div>
  );
};

export default ResponseDisplay;
