import React from 'react';
import './admin.scss'

import Routes from "../../routes";
import adminRoute from "./routes/adminRoute";
import SideMenu from "./containers/sidemenu";
import Nav from "./components/nav";

const AdminLayout = () => {
    return (
        <div className="admin flex">
            <SideMenu/>
            <div className="content flex column mt-md mr-md mb-md ">
                <Nav/>
                <div className="content-body mt-md">
                    <Routes routeItems={adminRoute}/>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
