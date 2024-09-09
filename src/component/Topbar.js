import React from "react";
import logo from '../img/logobi.png';
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Topbar() {
    return(
        <>
         <div className="dashboard-head float-start w-100">
      
            <div className="d-flex align-items-center justify-content-start d-lg-none mt-4 mb-3">
                <button className="btn btn-golger p-0 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                </button>
                <NavLink to="/" className="logo-modile">
                    <img alt="logo" src={logo}/>
                </NavLink>
            </div>
            <div className="d-flex w-100 top-header align-items-center justify-content-start">
                
            

                <div className="search-box d-none d-lg-flex align-items-center">
                <input type="text" className="form-control"/>
                <button type="submit" className="btn btn-search p-0">
                    <CiSearch/>
                </button>
                </div>

                <div className="cloclp-div">
                <div id="clock" className="d-flex align-items-center text-white">
                    <h2 className="unit" id="hours"></h2>
                    <h2>:</h2>
                    <h2 className="unit" id="minutes"></h2>
                    <sup className="unit" id="ampm"></sup>
                </div>
                </div>

                <nav className="navbar navbar-expand navbar-light">
                
                    
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                    
                        
                    

                        <li className="nav-item dropdown">
                        <a className="nav-link user-text d-flex align-items-center dropdown-toggle" data-bs-toggle="dropdown" href="#" id="navbarDropdown" role="button"  aria-expanded="false">
                            <div className="piv-user">
                                <img alt="ser" src="images/teacher-11.jpg"/>
                            </div>
                            <h5 className="text-white "> James Dan </h5>
                        </a>
                        <ul className="dropdown-menu show-big08 dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li>
                            <a data-bs-toggle="offcanvas" href="#accountui" role="button" className="user-name01-fullw05 d-flex align-items-center justify-content-between w-100">
                                
                                <div className="left-divu-dropdown d-flex align-items-center">
                                    <div className="imguser">
                                        <img alt="er" src="images/user01.svg"/>
                                    </div>
                                    <h5> Vanessa Due </h5>
                                </div>
                                <p className="btn btnpor"> Profile </p>
                            </a>
                            </li>
                            <li>
                            <a href="#" className="logout d-flex align-items-center justify-content-between w-100">
                                
                                <div className="left-divu-dropdown d-flex align-items-center">
                                    <div className="imguser">
                                        <img alt="er" src="images/system-auth-form__icon-logout.svg"/>
                                    </div>
                                    <h5> Log out </h5>
                                </div>
                            </a>
                            </li>
                        
                            
                        </ul>
                        </li>
                    
                        
                    </ul>
                    
                    </div>
                
                </nav>
            </div>

        </div>
        </>
    )
}
export default Topbar;