import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOutClick = () => {
    navigate("/signin");
  };

  return (
    <>
      {location.pathname === "/" && (
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
