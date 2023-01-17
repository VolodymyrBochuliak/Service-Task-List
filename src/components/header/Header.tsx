import React from "react";
import Navbar from "./navbar/Navbar";

const Header = () => {

    return (
        
        <header className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <img src="img/Logo.jpg" alt="Logo"></img>
                </div>
                < Navbar />
            </div>
        </header>
    )
};

export default Header;