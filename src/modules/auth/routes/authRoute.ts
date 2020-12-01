import {RouteInterface} from "../../../routes/routeInterface";
import Login from "../views/Login";
import Register from "../views/register";
import AdminLayout from "../../admin";

const authRoute: RouteInterface[] = [
    {
        path: "/admin",
        component: AdminLayout,
        isAuth: true,
        exact: false
    },
    {
        path: "/register",
        component: Register,
        isAuth: false,
        exact: true
    },
    {
        path: "/",
        component: Login,
        isAuth: false,
        exact: true
    },
]

export default authRoute
