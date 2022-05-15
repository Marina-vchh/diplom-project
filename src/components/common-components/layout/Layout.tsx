import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import './layout.css';


const Layout = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'hidden' : 'not-active' } to="/stickerPage">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/page2">

                    </NavLink>
                </li>
                <li>
                    <NavLink to="/page3">
                    </NavLink>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default Layout;