import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import BookServices from "../Pages/BookServices/BookServices";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path : "/login",
          element : <Login></Login>
        },
        {
          path : "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path : "book/:id",
          element : <BookServices></BookServices>,
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path : "checkout/:id",
          element : <Checkout></Checkout>,
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path : "bookings",
          element : <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ],
    },
  ]);

 export default router;