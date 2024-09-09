import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../img/logobi.png';

function Sidebar(){
    return(
        <>
          <aside className="main-sliderbar">
    
            <div className="menu-slidebar position-relative">
                 <div className="top-bars d-flex align-items-start">
                    <button className="navbar-toggler text-white p-0 border-0 d-block" type="button" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    </button>

                    <NavLink to="/" className="logo-dash">
                    <img alt="logo" src={logo} className="logn"/>
                    
                    </NavLink>
                 </div>
                <ul className="silder-menu">
                    <li>
                    <NavLink to="/tasks" className="link05"> 
                        
                        <span className="txet-men06"> Tasks and Projects </span> 
                    </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tasks" className="link05"> 
                        
                             <span className="txet-men06"> Manage user </span> 
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/tasks" className="link05"> 
                        
                             <span className="txet-men06"> Manage Billing</span> 
                        </NavLink>
                    </li>
                   
                    

                </ul>

       
            </div>
          </aside>
        </>
    )
}
export default Sidebar;
