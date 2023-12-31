import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import RecipeLayout from "../layout/RecipeLayout";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import LoginLayout from "../layout/LoginLayout";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Qustion from "../pages/Home/Home/Shared/NavigationBar/Qustion/Qustion";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      
    ],
  },
  

  {
    path: "category",
    element: <Main></Main>,
    children: [
      // {
      //   path: "/",
      //   element: <Category></Category>,
      //   loader: () => fetch('https://healthy-food-recipe-server-mdjewel999.vercel.app/recipe')
      // },
      {
        path: ":id",
        element: <Category></Category>,
        errorElement:<ErrorPage></ErrorPage>,
        loader: ({ params }) =>
          fetch(`https://healthy-food-recipe-server-mdjewel999.vercel.app/categories/${params.id}`),
      },
    ],
  },
  {
    path: "recipe",
    element: <RecipeLayout></RecipeLayout>,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://healthy-food-recipe-server-mdjewel999.vercel.app/recipe/${params.id}`),
      },
    ],
  },
  {
    path:'/qustion',
    element:<Qustion></Qustion>
  }
 
]);

export default router;
