import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Home } from "./Pages/Home";
import { HomeTeacher } from "./Pages/HomeTeacher";
import { CreateTaskOrExam } from "./Pages/CreateAvaliation";
import { ViewAvaliations } from "./Pages/ViewAvaliations";
import { SolveAvaliation } from "./Pages/SolveAvaliation";
import { CreateClass } from "./Pages/CreateClass";
import { ViewClasses } from "./Pages/ViewClasses";
import { Homeclass } from "./Pages/HomeClass";

import { AuthContextProvider } from "./context/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/home-teacher",
    element: <HomeTeacher />
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
    <AuthContextProvider>
      <RouterProvider router={router}/>
      <GlobalStyles />
    </AuthContextProvider>
  </React.StrictMode>
);
