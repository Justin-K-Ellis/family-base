import { Outlet } from "react-router";

export default function ListsLayout() {
  return (
    <>
      <Outlet />
      <div>ListsLayout</div>
    </>
  );
}
