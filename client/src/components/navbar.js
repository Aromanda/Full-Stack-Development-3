import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink,useLocation } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar({fullname}) {
  const location = useLocation();
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 12 + '%'}} src="images/rocketLogo.png" alt=""></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          {fullname && (  // Add this condition to check if fullname exists
                <span className="nav-link">Bonjour, {fullname}</span>
            )}
          </ul>
        </div>
     </nav>
   </div>
 );
}