import MainRoot from "../components/MainRoot";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Details from "../pages/Details";
import Products from "../pages/Products";
import ProductsDetails from "../pages/ProductsDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Cultures from "../pages/Cultures";
import News from "../pages/News";

// Ensure element is always a valid JSX component
const ROUTES = [
  {
    path: "/",
    element: <MainRoot />, // Fix: Use JSX syntax
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "details",
        element: <Details />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "productsDetails",
        element: <ProductsDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cultures",
        element: <Cultures />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default ROUTES;
