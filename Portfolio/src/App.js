import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Product from "./components/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product", element: <Product /> },
    ],
  },
  // },
  // {
  //   path: "/product",
  //   element: <product />,
  //   errorElement: <NotFound />,
  // },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
