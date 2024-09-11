import React from "react";
import { NavLink } from "react-router-dom";

function MobileMenu() {
     return(
        <>
        <div className="mobile-menu-fiexed d-block d-lg-none">
            <div className="conatiner">
                <ul className="silder-menu">

                    <li>
                        <NavLink to='/tasks' className="link05">
                            <span className="d-block"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> </span>
                            <span className="txet-men06"> Tasks and Projects </span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/manage-user" className="link05">
                        <span className="d-block"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> </span>
                        <span className="txet-men06"> Manage Users </span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/manage-user" className="link05">
                        <span className="d-block"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> </span>
                        <span className="txet-men06">  Webmail </span>
                        </NavLink>
                    </li>
                        </ul>
            </div>
        </div>
        </>
     )
}
export default MobileMenu;