import React from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../../context/useAuth";
import ToggleTheme from "../ui/ToggleTheme";
import { LogOut } from "lucide-react";
import { LogIn } from "lucide-react";

const Navbar = () => {
  // const { user, logout } = useAuth();
  // const navigate = useNavigate();

  // const handleLogout = async () => {
  //     await logout();
  //     navigate("/");
  // };
  return (
    <>
      <Link to="/" className="text-lg font-bold">
        <img src="/potion.png" alt="blog-logo-icon" className="w-10" />
      </Link>
      {
        <div className="flex gap-5 items-center">
          <Link to="/posts">Blog</Link>
          {/* <Link className="text-lg text-blue-500" to="/login">
            <LogIn />
          </Link> */}
          <ToggleTheme />
        </div>
      }
    </>
  );
};

export default Navbar;
