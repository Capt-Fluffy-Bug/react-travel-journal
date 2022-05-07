import React from "react";
import {GiEarthAmerica} from "react-icons/gi"

export default function Navbar() {
    return (
        <nav className="navbar">
            <span className="navbar--logo"><GiEarthAmerica size={30}/></span>
            <p className="navbar--title">My Travel Journal</p>
        </nav>
    )
}