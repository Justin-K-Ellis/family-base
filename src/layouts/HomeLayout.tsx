import { Outlet } from "react-router";
export default function HomePage() {
  return (
    <>
      <main className="mx-auto flex flex-col items-center w-11/12 md:w-1/2">
        <Outlet />
      </main>
    </>
  );
}
