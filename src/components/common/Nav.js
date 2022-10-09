import React from "react";
import {Link} from "react-router-dom";

export function Nav(){

    return(
        <nav className="main-nav">
            <Link className="main-nav_link" to="/">Start</Link>
            <Link className="main-nav_link" to="/howtoplay">Jak grać?</Link>
            <Link className="main-nav_link" to="/maingame">Zagrajmy!</Link>
        </nav>
    )
}

