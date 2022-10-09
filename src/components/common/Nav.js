import React from "react";
import {Link} from "react-router-dom";

export function Nav(){

    return(
        <nav>
            <Link to="/">Start</Link>
            <Link to="/howtoplay">Jak grać?</Link>
            <Link to="/maingame">Gra</Link>
        </nav>
    )
}

// w ul dodać Link do podstron
