import React, { useEffect } from "react";
import ParticlesBg from "particles-bg";
import Navigation from "./components/navigation";
import { useRecoilValue } from "recoil";
import HomeScreen from "./components/home-screen";
import SignIn from "./components/sign-in";
import { SignInState } from "./states";
import {
  createBrowserRouter,
  redirect,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import Register from "./components/register";

function App() {
  const isSignIn = useRecoilValue(SignInState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignIn) {
      navigate("/signin");
    }
  }, [isSignIn]);

  return (
    <div className="App bg-neutral-200/40 p-8">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
