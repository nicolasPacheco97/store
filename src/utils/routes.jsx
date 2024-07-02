import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Product from "../../pages/Product/Product";
import Home from "../../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/store",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product",
        element: <Product/>
      }
    ]
  }
])

export default router;