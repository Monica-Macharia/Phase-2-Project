import React from 'react';
// import ReactDOM from "react-dom";
import {NavLink} from 'react-router-dom';


const styles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function NavBar(){
    return (
        <div>
            <NavLink to = "./" exact
            style={styles} 
            > Home 
            </NavLink>
            <NavLink to = "/Dining" exact
            style={styles} 
           > Dining
             </NavLink>
             <NavLink 
             to = "/Gallery" exact
            style={styles} 
            > Gallery 
            </NavLink>
            <NavLink
             to = "/Testimonials" exact
            style={styles} 
            > Testimonials
            </NavLink>
            <NavLink to = "/Contact" exact
            style={styles} 
            > Contact </NavLink>
        </div>
    )
}

export default NavBar;
