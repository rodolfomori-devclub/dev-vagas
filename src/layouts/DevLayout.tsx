import { Outlet } from "react-router-dom";

import { Header } from "../components";

export function DevLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
