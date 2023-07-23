import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Routes/Main/Main.jsx";
import Home from "./Components/Home/Home.jsx";
import College from "./Components/College/College";
import AdmissionPage from "./Components/Admission/Addmission";

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
        element: <College></College>,
      },
      {
        path: "/Admission",
        element: <AdmissionPage></AdmissionPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
