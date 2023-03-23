import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Login } from "./Pages/Login";
import { CreateTaskOrExam } from "./Pages/CreateAvaliation";
import { ViewAvaliations } from "./Pages/ViewAvaliations";
import { SolveAvaliation } from "./Pages/SolveAvaliation";
import { CreateClass } from "./Pages/CreateClass";
import { ViewClasses } from "./Pages/ViewClasses";
import { Homeclass } from "./Pages/HomeClass";

import { AuthContextProvider } from "./context/AuthProvider";
import { HomeStudent } from "./Pages/Student/HomeStudent";
import { Home } from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  }, 
  {
    path: "/home",
    element: <Home />
  }, 
  {
    path: "/home-student",
    element: <HomeStudent />
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
