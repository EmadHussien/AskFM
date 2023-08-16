import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import MyQuestions from './Components/MyQuestions';
import EditUser from './Components/EditUser';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: 'questions',
    element : <MyQuestions />
  },
  {
    path : 'edit',
    element: <EditUser />
  },
  {
    path:'*',
    element: <Navigate to = '/' />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={Routes} />
);

