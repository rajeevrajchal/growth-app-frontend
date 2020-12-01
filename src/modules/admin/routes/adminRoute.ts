import {RouteInterface} from "../../../routes/routeInterface";
import AdminDashboard from "../views/dashboard";
import Study from "../views/study";
import Projects from "../views/projects";
import Task from "../views/tasks";
import Calendar from "../views/calendar";
import Account from "../views/account";
import Report from "../views/report";

const adminRoute:RouteInterface[] = [
    {
        path: "/admin/projects",
        component: Projects,
        exact: true,
        isAuth: true,
    },
    {
        path: "/admin/tasks",
        component: Task,
        exact: true,
        isAuth: true,
    },
    {
        path: "/admin/calender",
        component: Calendar,
        exact: true,
        isAuth: true,
    },
    {
        path: "/admin/my-account",
        component: Account,
        exact: true,
        isAuth: true,
    },
    {
        path: "/admin/report",
        component: Report,
        exact: true,
        isAuth: true,
    },
    {
        path: "/admin/settings",
        component: Account,
        exact: true,
        isAuth: true,
    },
    {
        path: "/admin/study",
        component: Study,
        exact: true,
        isAuth: true,
    },
    {
        path: "/admin",
        component: AdminDashboard,
        exact: true,
        isAuth: true,
    },
]

export default adminRoute
