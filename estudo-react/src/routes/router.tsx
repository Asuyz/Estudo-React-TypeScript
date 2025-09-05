import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import LinkDistros from "./LinkDistros";
import LogoDistro from "./LogoDIstro";
import Error from "./Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/linkdistros",
        element: <LinkDistros />,
      },
      {
        path: "/logodistro",
        element: <LogoDistro />,
      },
    ],
  },
]);

export default router;