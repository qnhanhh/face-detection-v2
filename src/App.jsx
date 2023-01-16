import React from "react";
import ParticlesBg from "particles-bg";
import LinkInput from "./components/link-input";
import Navigation from "./components/navigation";
import Rank from "./components/rank";

// const app = new Clarifai.App({
//   apiKey: "afac976e7a874656ae739e29a89d8ea6",
// });

function App() {
  const handleClick=()=>{
    // app.models
    //   .predict(
    //     Clarifai.FACE_DETECT_MODEL,
    //     "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
    //   )
    //   .then((response) => console.log(response));
  }

  return (
    <div className="App bg-neutral-200/20">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation />
      <div className="flex h-screen flex-col items-center justify-center">
        <Rank />
        <LinkInput />
        <h1 onClick={handleClick}>hi</h1>
      </div>
    </div>
  );
}

export default App;
