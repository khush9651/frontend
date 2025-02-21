import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
  document.title = "12345"; // Set roll number as title
  const [responseData, setResponseData] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white p-5">
      <h1 className="text-4xl font-bold mb-5">BFHL Frontend</h1>
      <p className="mb-4 text-lg">Enter JSON to get response</p>
      <InputForm setResponseData={setResponseData} />
      {responseData && <ResponseDisplay responseData={responseData} />}
    </div>
  );
};

export default App;
