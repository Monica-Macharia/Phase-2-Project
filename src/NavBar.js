import React from 'react';
// import ReactDOM from "react-dom";
import {NavLink} from 'react-router-dom';


const styles = {
    display: "inline-block",
    
    width: "60px",
    padding: "35px",
    margin: "17px 16px 16px",
    textDecoration: "none",
    color: "black",
  };

function NavBar(){
    return (
      
        <div className = "see">
          <img className= "logo" src="https://images.unsplash.com/photo-1614529303008-4762ea020a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk4fHxzbWFsbCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt= "logo"/> 
          <p className= "name"><b>Africana Restaurant</b></p>
      
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
            <NavLink to = "/Bookings" exact
            style={styles}
            activeStyle={{
                background: "darkblue",
              }} 
            > Bookings </NavLink>
        </div>
        
    )
}

export default NavBar;
