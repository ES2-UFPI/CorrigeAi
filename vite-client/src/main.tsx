import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./styles/globalStyles";

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Home } from "./Pages/Home";
import { CreateTaskOrExam } from "./Pages/CreateAvaliation";
import { ViewAvaliations } from "./Pages/ViewAvaliations";
import { SolveAvaliation } from "./Pages/SolveAvaliation";
import { CreateClass } from "./Pages/CreateClass";
import { ViewClasses } from "./Pages/ViewClasses";
import { Homeclass } from "./Pages/HomeClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/form-avaliation",
    element: <CreateTaskOrExam />
  },
  {
    path: "/view-avaliations",
    element: <ViewAvaliations />
  },
  {
    path: "/solve-avaliation",
    element: <SolveAvaliation/>
  },
  {
    path: "/create-class",
    element: <CreateClass/>
  },
  {
    path: "/view-classes",
    element: <ViewClasses/>
  },
  {
    path: "/home-class",
    element: <Homeclass/>
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
    <GlobalStyles />
  </React.StrictMode>
);
