import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Background from "../../../containers/background/Background";
import './/layouts.css';


const LayoutChoosePage = () => {
    return (
        <>
            <Background titleText="Shop" className="background background-choose" titleTextClassname="title-wrapper title-wrapper-order"/>
            <ul className="layout">
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'not-active' : 'not-active' } to="/stickerPage">
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