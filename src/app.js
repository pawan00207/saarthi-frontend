import React from "react";
import ToneChecker from "./components/ToneChecker";
import FeedInfo from './components/FeedInfo';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">🧠 Saarthi AI Assistant</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <ToneChecker />
        <FeedInfo />
      </div>
    </div>
  );
}

export default App;