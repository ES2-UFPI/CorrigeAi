import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./styles/globalStyles";

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Home } from "./Pages/Home";
import { CreateTaskOrExam } from "./Pages/CreateTaskOrExam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/form-avaliation",
    element: <CreateTaskOrExam />
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
    <GlobalStyles />
  </React.StrictMode>
);
