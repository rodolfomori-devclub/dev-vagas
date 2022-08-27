import { Outlet } from "react-router-dom";

import { Header } from "../components";

export function RecruiterLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
