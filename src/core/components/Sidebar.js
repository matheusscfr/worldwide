import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { LanguageOutlined, TravelExploreOutlined } from "@mui/icons-material";
const Sidebar = ()=>{
    return(
        <div className="sidebar">
           <div className="sidebar_logo">
                <Logo/>
           </div>

           <div className="sidebar_menu">
            <NavLink className="sidebar_link" to='/'>
                <LanguageOutlined/> Country
            </NavLink>
            <NavLink className="sidebar_link" to='/states'>
                <TravelExploreOutlined/> States
            </NavLink>

           </div>
        </div>
    )}

export default Sidebar