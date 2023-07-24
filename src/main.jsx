import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Routes/Main/Main.jsx";
import Home from "./Components/Home/Home.jsx";

import AdmissionPage from "./Components/Admission/Addmission";
import Colleges from "./Components/Colleges/Colleges";
import MyCollege from "./Components/MyColleges/MyColleges";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/College",
        element: <Colleges></Colleges>,
      },
      {
        path: "/Admission",
        element: <AdmissionPage></AdmissionPage>,
      },
      {
        path: "/MyCollege",
        element: <MyCollege></MyCollege>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
