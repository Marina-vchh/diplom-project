import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Background from "../../../containers/background/Background";
import "./layouts.css";

const LayoutCheckoutPage = () => {
    return (
        <>
            <Background titleText="Checkout" className="background background-checkout" />
            <ul className="layout">
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'not-active' : 'not-active' } to="/stickers">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'not-active' : 'not-active' } to="/cart" >
                        Cart
                    </NavLink>
                </li>
                <li>
                    <p className="active-link">
                        Checkout
                    </p>
                </li>
            </ul>
            <Outlet />
        </>
    )
};

export default LayoutCheckoutPage;