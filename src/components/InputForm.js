import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ setResponseData }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");
      const jsonData = JSON.parse(input);
      if (!jsonData.data || !Array.isArray(jsonData.data)) {
        throw new Error("Invalid JSON format");
      }

      const response = await axios.post("https://your-backend-url/bfhl", jsonData);
      setResponseData(response.data);
    } catch (err) {
      setError("Invalid JSON format. Please enter a valid JSON.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg bg-white text-black p-5 shadow-lg rounded-lg">
      <textarea
        className="w-full p-2 border border-gray-300 rounded h-24"
        placeholder='Enter JSON e.g. { "data": ["A","1","B","2"] }'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        className="w-full bg-blue-500 text-white p-2 mt-3 rounded hover:bg-blue-600"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Processing..." : "Submit"}
      </button>
    </div>
  );
};

export default InputForm;

