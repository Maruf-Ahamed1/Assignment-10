import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllArts from "../Pages/AllArts/AllArts";
import AddCraft from "../Pages/AddCraft/AddCraft";
import MyList from "../Pages/MyList/MyList";
import NotFound from "../Pages/NotFound/NotFound";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import SingleDetails from "../Pages/SingleDetails/SingleDetails";
import SixView from "../Pages/SixView/SixView";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/all',
                element:<AllArts></AllArts>
            },
            {
                path: '/add',
                element:<PrivateRoute>
                    <AddCraft></AddCraft>
                </PrivateRoute>
            },
            {
                path: '/my',
                element:<PrivateRoute>
                    <MyList></MyList>
                </PrivateRoute>
            },
            {
                path: '/update/:id',
                element:<PrivateRoute>
                    <ViewDetails></ViewDetails>
                </PrivateRoute>,
            },
            {
                path: '/Details/:id',
                element:<PrivateRoute>
                    <SingleDetails></SingleDetails>,
                </PrivateRoute>
            },
            {
                path: '/Six/:id',
                element:<SixView></SixView>,
                loader: () => fetch('../Data.json')
            }
         
          
        ]
    }
])

export default router;