import React from 'react'
import App from './App'
import CreateExamOrTask from './pages/CreateExamOrTask';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import './index.css'
import AddQuestions from './pages/AddQuestions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/criarProvaOuTarefa",
    element: <CreateExamOrTask/>,
  },
  {
    path: "/adicionarQuestoes",
    element: <AddQuestions/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
