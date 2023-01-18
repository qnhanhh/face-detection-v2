import React from "react";
import ParticlesBg from "particles-bg";
import Navigation from "./components/navigation";
import { useRecoilValue } from "recoil";
import HomeScreen from "./components/home-screen";
import SignIn from "./components/sign-in";
import { SignInState } from "./states";

function App() {
  const isSignIn = useRecoilValue(SignInState);

  return (
    <div className="App bg-neutral-200/40 p-8">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation />
      {!isSignIn ? <SignIn /> : <HomeScreen />}
    </div>
  );
}

export default App;
