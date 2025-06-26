import React, { useState } from "react";
import axios from "axios";

function FeedInfo() {
  const [username, setUsername] = useState("");
  const [reason, setReason] = useState("");

  const getFeed = async () => {
    try {
      const res = await axios.get(
        `https://saarthi-backend-42eo.onrender.com/api/feed-info/${username}`
      );
      setReason(res.data.reason);
    } catch (err) {
      setReason("Could not fetch feed info.");
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">📡 Feed Info</h2>
      <input
        type="text"
        className="w-full border rounded p-2 mb-2"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={getFeed}
      >
        Get Feed Info
      </button>
      {reason && <p className="mt-4 text-sm text-gray-700">Reason: {reason}</p>}
    </div>
  );
}

export default FeedInfo;