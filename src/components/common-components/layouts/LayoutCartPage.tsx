import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Background from "../../../containers/background/Background";
import "./layouts.css";

const LayoutCartPage = () => {
    return (
        <>
            <Background titleText="Cart" className="background background-cart" />
            <ul className="layout">
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'not-active' : 'not-active' } to="/stickers">
                        Home
                    </NavLink>
                </li>
                <li>
                    <p className="active-link">
                        Cart
                    </p>
                </li>
            </ul>
            <Outlet />
        </>
    )
};

export default LayoutCartPage;