import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex flex-col items-center w-11/12 md:w-1/2">
        <Outlet />
      </main>
    </>
  );
}
