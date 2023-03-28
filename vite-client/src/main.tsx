import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Login } from "./Pages/Login";
import { CreateTaskOrExam } from "./Pages/Teacher/CreateAvaliation";
import { ViewAvaliations } from "./Pages/ViewAvaliations";
import { SolveAvaliation } from "./Pages/Student/SolveAvaliation";
import { CreateClass } from "./Pages/Teacher/CreateClass";
import { ViewClasses } from "./Pages/ViewClasses";
import { HomeClass } from "./Pages/HomeClass";

import { AuthContextProvider } from "./context/AuthProvider";
import { Home } from "./Pages/Home";
import { ViewPerfilUser } from "./Pages/ViewPerfilUser";
import { RedirectLogin } from "./components/Redirect";
import { Participants } from "./components/Participants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectLogin />
  }, 
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
    element: <CreateClass />
  },
  {
    path: "/view-classes",
    element: <ViewClasses />
  },
  {
    path: "/participants",
    element: <Participants />
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
