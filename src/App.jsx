import React from "react";

// compoenents
import IntroCard from "./Cards/IntroCard";
import ProCard from "./Cards/ProCard";
import BaseCard from "./Cards/BaseCard";

const App = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-[#091a4f] mb-16 text-center">
        Right plan for you
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <IntroCard />
        <ProCard />
        <BaseCard />
      </div>
    </>
  );
};

export default App;
