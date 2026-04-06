import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <main>
      <nav className="bg-base-200">
        <h1>Family Base</h1>
        <button className="btn btn-primary">Button</button>
      </nav>
      <Outlet />
    </main>
  );
}
