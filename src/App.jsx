import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Mainlayout from "./layouts/Mainlayout";
import Jobspage, { jobLoader } from "./pages/Jobspage";
import Notfound from "./pages/Notfound";
import Jobpage from "./pages/Jobpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes path="/" element={<Mainlayout />}>
      <Route index element={<Homepage />} />
      <Route path="/jobs" element={<Jobspage />} />
      <Route path="/jobs/:id" element={<Jobpage />} loader={jobLoader} />
      {/* <Route path="*" element={<Notfound />} /> */}
    </Routes>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
