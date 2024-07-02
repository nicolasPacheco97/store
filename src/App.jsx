import { RouterProvider } from "react-router-dom";
import router from "./utils/routes.jsx";

function App() {
  return <>
    <RouterProvider router={router} />
  </>
}

export default App;
