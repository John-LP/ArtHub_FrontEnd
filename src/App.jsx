import React from 'react';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import UserProfile from './pages/UserProfile';
import ArtworkDetail from './pages/ArtworkDetail';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user/:userId",
      element: <UserProfile />,
    },
    {
      path: "/artwork/:artworkId",
      element: <ArtworkDetail />,
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

