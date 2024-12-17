import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes/route";
import "./app.scss"

// Create router
const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


