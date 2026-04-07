import { NavLink } from "react-router";
import { navData } from "../assets/navData";
import type { NavData } from "../types/NavData";
import SignOutBtn from "./SignOutBtn";

export default function SignedInNav({ username }: { username: string }) {
  const userData: NavData = {
    text: `Welcome, ${username}`,
    icon: "",
    url: "",
  };

  const fullNavData = [userData, ...navData];

  return (
    <div className="flex items-center gap-3 md:gap-0">
      {fullNavData.map((data) => (
        <NavLink
          to={data.url}
          key={data.url}
          className={"flex md:btn md:btn-ghost text-xl md:text-lg"}
        >
          <span>{data.icon}</span>
          <span className="hidden md:flex">{data.text}</span>
        </NavLink>
      ))}
      <SignOutBtn />
    </div>
  );
}
