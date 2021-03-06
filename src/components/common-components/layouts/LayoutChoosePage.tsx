import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Background from "../../../containers/background/Background";
import "./layouts.css";


const LayoutChoosePage = () => {
    return (
        <>
            <Background titleText="Shop" className="background background-choose" />
            <ul className="layout">
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'not-active' : 'not-active' } to="/stickers">
                        Home
                    </NavLink>
                </li>
                <li>
                    <p className="active-link">
                        Choose
                    </p>
                </li>
            </ul>
            <Outlet />
        </>
    )
};

export default LayoutChoosePage;