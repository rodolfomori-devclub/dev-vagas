import { Routes, Route } from "react-router-dom";

import { HomeDev, HomeRecruiter } from "./containers";
import { DevLayout } from "./layouts/DevLayout";
import { RecruiterLayout } from "./layouts/RecruiterLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DevLayout />}>
        <Route path="/" element={<HomeDev />} />
      </Route>

      {/* <Route path="/home-recruiter" element={<RecruiterLayout />}>
        <Route path="/" element={<HomeRecruiter />} />
      </Route> */}
    </Routes>
  );
}
