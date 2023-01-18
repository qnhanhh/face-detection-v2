import { useRecoilState } from "recoil";
import { SignInState } from "../../states";

const Navigation = () => {
  const [isSignIn, setIsSignIn] = useRecoilState(SignInState);

  const handleSignOutClick = () => {
    setIsSignIn(false);
  };

  return (
    <>
      {isSignIn && (
        <nav
          onClick={handleSignOutClick}
          className="absolute right-2 p-4 hover:cursor-pointer"
        >
          <p className="text-lg underline hover:text-slate-500">Sign Out</p>
        </nav>
      )}
    </>
  );
};

export default Navigation;
