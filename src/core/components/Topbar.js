import React from "react";
import {GitHub, YouTube, Instagram, WhatsApp} from '@mui/icons-material'
const Topbar = ()=>{
    return(
        <div className="topbar">
            <ul className="topbar_list">
                <li className="topbar_item">
                    <a href="www.github.com/matheusscfr" target='_blank' className="topbar_link">
                        <GitHub />
                    </a>
                </li>

                <li className="topbar_item">
                    <a href="www.github.com/matheusscfr" target='_blank' className="topbar_link">
                        <Instagram />
                    </a>
                </li>

                <li className="topbar_item">
                    <a href="www.github.com/matheusscfr" target='_blank' className="topbar_link">
                        <YouTube />
                    </a>
                </li>

                <li className="topbar_item">
                    <a href="www.github.com/matheusscfr" target='_blank' className="topbar_link">
                        <WhatsApp />
                    </a>
                </li>
            </ul>
        </div>
    )}

export default Topbar