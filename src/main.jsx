import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Registration from './components/Login/Registration/Registration.jsx';
import Login from './components/Login/Login/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world</div>,
    errorElement: <ErrorPage></ErrorPage>,
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
