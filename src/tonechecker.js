import React, { useState } from "react";
import axios from "axios";

function ToneChecker() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const checkTone = async () => {
    try {
      const res = await axios.post(
        "https://saarthi-backend-42eo.onrender.com/api/tone-check",
        { message }
      );
      setResult(res.data.analysis);
    } catch (err) {
      setResult("Error analyzing tone.");
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">🔍 AI Tone Checker</h2>
      <textarea
        className="w-full border rounded p-2 mb-2"
        rows="4"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={checkTone}
      >
        Analyze Tone
      </button>
      {result && <p className="mt-4 text-sm text-gray-700">Result: {result}</p>}
    </div>
  );
}

export default ToneChecker;