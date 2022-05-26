import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import './layout.css';


const Layout = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'not-active' : 'not-active' } to="/stickerPage">
                        Home
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink className={(navData) => navData.isActive ? 'not-active' : 'not-active' } to="/choosePage">
                        choose
                    </NavLink>
                </li> */}
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'not-active' : 'not-active' } to="/wishListPage">
                        WishList
                    </NavLink>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default Layout;