import React from 'react';
// import ReactDOM from "react-dom";
import {NavLink} from 'react-router-dom';


const styles = {
    display: "inline-block",
    width: "60px",
    padding: "44px",
    // margin: "0 6px 6px",
    textDecoration: "none",
    color: "black",
  };

function NavBar(){
    return (
        <div>
            <NavLink to = "./" exact
            style={styles}
            activeStyle={{
                background: "darkblue",
              }}
            > Home 
            </NavLink>
            <NavLink to = "/Dining" exact
            style={styles} 
            activeStyle={{
                background: "darkblue",
              }}
           > Dining
             </NavLink>
             <NavLink 
             to = "/Gallery" exact
            style={styles}
            activeStyle={{
                background: "darkblue",
              }} 
            > Gallery 
            </NavLink>
            <NavLink
             to = "/Testimonials" exact
            style={styles} 
            activeStyle={{
                background: "darkblue",
              }}
            > Testimonials
            </NavLink>
            <NavLink to = "/Contact" exact
            style={styles}
            activeStyle={{
                background: "darkblue",
              }} 
            > Contact </NavLink>
        </div>
    )
}

export default NavBar;
