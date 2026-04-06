import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthProvider";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="navbar bg-base-200 shadow mb-4 md:mb-6">
      <div className="navbar-start">
        <NavLink to={"/"} className="text-2xl md:text-3xl font-bold">
          Family Base
        </NavLink>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <p>Welcome user</p>
        ) : (
          <>
            <NavLink to="/sign-up" className={"btn btn-primary"}>
              Sign Up
            </NavLink>
            <NavLink to={"/sign-in"} className={"btn btn-secondary"}>
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
