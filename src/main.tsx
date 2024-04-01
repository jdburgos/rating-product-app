import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./routes/layouts/RootLayout";
import { HomePage } from "./routes/pages/HomePage";
import { LikedPage } from "./routes/pages/LikedPage";
import { ProductProvider } from "@/contexts/ProductContext";
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/liked',
        element: <LikedPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ ProductProvider>
  </React.StrictMode>,
)
