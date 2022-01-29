import React from "react";
import { Component } from "react";
import {menuItems} from "./MenuItems";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "./logo512.png";

class Navbar extends Component {
    render(){
        return(
            <nav className="Navbar">
                <div className="logo">

                <img class="logo-img" src={Logo} 
                   width="200"
                   height="200"
                   alt="logo"
                    />

                 <h1 class="Denia-stella-Header"><span>Apartments Villas</span></h1>
                
                 </div>
                 <ul className="Menubar">
                    {
                    menuItems.map((item , index) => {
                        return(
                        <li key={index}><Link className={item.className} to={item.url}>{item.title}</Link></li>
                        )
                    }
                    )}
                </ul>

            </nav>
        )
    }
}

export default Navbar;