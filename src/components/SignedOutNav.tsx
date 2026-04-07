import { NavLink } from "react-router";

export default function SignedOutNav() {
  return (
    <div className="flex gap-2">
      <NavLink to="/sign-up" className={"btn btn-primary btn-sm md:btn-md"}>
        Sign Up
      </NavLink>
      <NavLink to={"/sign-in"} className={"btn btn-secondary btn-sm md:btn-md"}>
        Sign In
      </NavLink>
    </div>
  );
}
