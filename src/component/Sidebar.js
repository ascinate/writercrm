import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../img/logobi.png';

function Sidebar(){
    return(
        <>
          <aside className="main-sliderbar">
    
            <div className="menu-slidebar position-relative">
                 <div className="top-bars d-flex align-items-start">
                    

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
                        <NavLink to="/manage-user" className="link05"> 
                        
                             <span className="txet-men06"> Manage user </span> 
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/billing" className="link05"> 
                        
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
