import React from "react";
import ParticlesBg from "particles-bg";
import LinkInput from "./components/link-input";
import Navigation from "./components/navigation";
import Rank from "./components/rank";
import FaceRecognition from "./components/face-recognition";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App bg-neutral-200/40 p-8">
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation />
        <div className="flex h-screen flex-col items-center justify-center">
          <Rank />
          <LinkInput />
          <FaceRecognition />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
