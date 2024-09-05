import React from "react";
import EventList from "./EventList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <EventList />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
