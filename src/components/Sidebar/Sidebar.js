import React, { useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import sidebarMenu from "./sidebarMenu.png"

const Sidebar = () => {
    const navigationLinks = [
        { url: "/resource/read", name: "Resource" },
        { url: "/project", name: "Project" },
    ];
    const [open, setOpen] = useState("close");
    const [style, setStyle] = useState("sidebar");

    // let isAuth = localStorage.getItem("token");

    const handleClick = () => {
        switch (open) {
            case "open":
                setOpen("close");
                setStyle("sidebar active");
                break;
            case "close":
                // if (isAuth) {setOpen("open")};
                setOpen("open")
                setStyle("sidebar");
                break;
            default:
                break;
        }
    };
    return (
        <div>
            <div className={style}>
                <div className="sidebarNav">
                    <li className="sidebarLayer">
                        {style === "sidebar" ? (
                            <img
                                src={sidebarMenu}
                                alt="Toggle Sidebar"
                                onClick={handleClick}
                            />
                        ) : (
                            <img
                                src={sidebarMenu}
                                alt="Toggle Sidebar"
                                style={{ transform: "rotate(180deg)" }}
                                onClick={handleClick}
                            />
                        )}
                    </li>
                    {navigationLinks.map(nav => {
                        return (
                            <NavLink
                                key={nav.url}
                                className="sidebarLinks"
                                to={nav.url}
                                onClick={handleClick}
                            >
                                {nav.name}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Sidebar;