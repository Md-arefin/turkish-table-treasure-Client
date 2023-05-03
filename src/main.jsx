import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Registration from './components/Login/Registration/Registration.jsx';
import Login from './components/Login/Login/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
  {
    path: '/registration',
    element: <Registration></Registration>,
  },
  {
    path: '/login',
    element: <Login></Login>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
