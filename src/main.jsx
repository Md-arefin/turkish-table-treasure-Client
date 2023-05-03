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
import ChefDetails from './components/ChefDetails/ChefDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch ('https://food-recipe-server-md-arefin.vercel.app/foodRecipe') ,
      },
      {
        path:'/chef-details/:id',
        element: <ChefDetails></ChefDetails>,
        loader: ({params}) => fetch(`https://food-recipe-server-md-arefin.vercel.app/foodRecipe/${params.id}`)
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
