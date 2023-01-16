import React from "react";
import ParticlesBg from "particles-bg";
import LinkInput from "./components/link-input";
import Navigation from "./components/navigation";
import Rank from "./components/rank";
import FaceRecognition from "./components/face-recognition";

function App() {
  return (
    <div className="App bg-neutral-200/20">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation />
      <div className="flex h-screen flex-col items-center justify-center">
        <Rank />
        <LinkInput />
        <FaceRecognition />
      </div>
    </div>
  );
}

export default App;
