import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx';
import Error from './routes/Error/index.tsx';
import Home from './routes/Home/index.tsx';
import LinkDistros from './routes/LinkDistros/index.tsx';
import LogoDistro from './routes/LogoDIstro/index.tsx';


const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Error/>, children: [
    {path: "/", element: <Home/>},
    {path: "/linkdistros", element: <LinkDistros/>},
    {path: "/logodistro", element: <LogoDistro/>}


]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
