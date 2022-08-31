import { Route, Routes } from 'react-router-dom';

import { HomeDev } from './containers';
import { DevLayout } from './layouts/DevLayout';

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
