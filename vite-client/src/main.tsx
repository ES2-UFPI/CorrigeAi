import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Login } from "./Pages/Login";
import { CreateTaskOrExam } from "./Pages/Teacher/CreateAvaliation";
import { SolveAvaliation } from "./Pages/Student/SolveAvaliation";
import { ViewAvaliations } from "./Pages/ViewAvaliations";
import { CreateClass } from "./Pages/Teacher/CreateClass";
import { ViewClasses } from "./Pages/ViewClasses";
import { HomeClass } from "./Pages/HomeClass";

import { AuthContextProvider } from "./context/AuthProvider";
import { Home } from "./Pages/Home";
import { ViewPerfilUser } from "./Pages/ViewPerfilUser";

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
    path: "/perfil",
    element: <ViewPerfilUser />
  }, 
  {
    path: "/create-avaliation",
    element: <CreateTaskOrExam />
  },
  {
    path: "/view-avaliations",
    element: <ViewAvaliations />
  },
  {
    path: "/solve-avaliation",
    element: <SolveAvaliation />
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
    element: <HomeClass />
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
