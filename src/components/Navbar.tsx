import { NavLink } from "react-router";
import useAuth from "../auth/useAuth";
import SignedOutNav from "./SignedOutNav";
import SignedInNav from "./SignedInNav";

export default function Navbar() {
  const { user } = useAuth();
  const username = user?.email ? user.email.split("@")[0] : "User";

  return (
    <nav className="navbar bg-base-200 shadow mb-4 md:mb-6">
      <div className="navbar-start">
        <NavLink to={"/"} className="text-2xl md:text-3xl font-bold">
          Family Base
        </NavLink>
      </div>
      <div className="navbar-end">
        {user ? <SignedInNav username={username} /> : <SignedOutNav />}
      </div>
    </nav>
  );
}
