import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllArts from "../Pages/AllArts/AllArts";
import AddCraft from "../Pages/AddCraft/AddCraft";
import MyList from "../Pages/MyList/MyList";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
                element:<AddCraft></AddCraft>
            },
            {
                path: '/my',
                element:<MyList></MyList>
            }
        ]
    }
])

export default router;