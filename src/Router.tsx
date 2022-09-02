import { Route, Routes } from 'react-router-dom';

import { HomeDev } from './containers';
import { LoginPage } from './containers/LoginPage';
import { DevLayout } from './layouts/DevLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DevLayout />}>
        <Route path="/" element={<HomeDev />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* <Route path="/home-recruiter" element={<RecruiterLayout />}>
        <Route path="/" element={<HomeRecruiter />} />
      </Route> */}
    </Routes>
  );
}
