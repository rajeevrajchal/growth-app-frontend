import React from 'react';
import { NavLink,useLocation } from "react-router-dom";

import Logo from "../../../../common/components/logo";
import sideMenuItems, {sideMenuItemsInterface} from "./sideMenuItems";

import diagram from '../../../../assets/svgs/diagram.svg'
const SideMenu: React.FC = () => {
    const  location = useLocation();
    return (
        <div className="side-menu ma-md">
            <div className="flex-centered">
                <Logo logo={diagram}/>
            </div>
            <div className="side-menu-items ">
                {
                    sideMenuItems.map((item: sideMenuItemsInterface, index: number) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            exact
                            className={`side-menu-item flex align-center items-center ml-lg pointer mt-xl ${item.path === location.pathname ? 'active' : ''}`}>
                            <i className="material-icons">
                                {item.icon}
                            </i>
                            <div className="sub-title uppercase pl-lg bold letter-spacing">
                                {item.label}
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default SideMenu;
