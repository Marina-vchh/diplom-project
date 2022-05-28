import { NavLink, Outlet } from "react-router-dom";
import Background from "../../../containers/background/Background";
import React from "react";
import './/layouts.css';

interface ILayout {
}

const LayoutCartPage = () => {
    return (
        <>
            <Background titleText="Cart" className="background background-cart" />
            <ul className="layout">
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'not-active' : 'not-active' } to="/stickerPage">
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