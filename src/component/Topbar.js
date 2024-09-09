import React from "react";
import logo from '../img/logobi.png';
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Clock from 'react-live-clock';
import user from '../img/user01.svg';
import Fileimg from "../img/system-auth-form__icon-logout.svg";
import closepic from "../img/close.svg";

function Topbar() {
    const UserDate = [
        { label:'Name', personal:'Mrs. Smith'  },
        { label:'E-mail', personal:'exmpale@gmail.com'  },
        { label:'Phone', personal:'+91 2560256400'  },
        { label:'Designation', personal:'Web Designer'  },
        { label:'Role', personal:'UI/UX'  },
        { label:'Created', personal:'exmpale@gmail.com'  },
    ];

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
                
            

              

                <div className="cloclp-div">
                   <Clock format={'HH:mm a'} ticking={true} timezone={'US/Pacific'} />
                </div>

                <nav className="navbar navbar-expand navbar-light">
                
                    
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                    
                        
                    

                        <li className="nav-item dropdown">
                        <NavLink className="nav-link user-text d-flex align-items-center dropdown-toggle" data-bs-toggle="dropdown" href="#" id="navbarDropdown" role="button"  aria-expanded="false">
                            <div className="piv-user">
                                <img alt="ser" src={user}/>
                            </div>
                            <h5 className="text-white "> James Dan </h5>
                        </NavLink>
                        <ul className="dropdown-menu show-big08 dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li>
                            <button data-bs-toggle="offcanvas" href="#accountui" role="button" className="user-name01-fullw05 d-flex align-items-center justify-content-between w-100">
                                
                                <div className="left-divu-dropdown d-flex align-items-center">
                                    <div className="imguser">
                                        <img alt="ser" src={user}/>
                                    </div>
                                    <h5> Vanessa Due </h5>
                                </div>
                                <p className="btn btnpor"> Profile </p>
                            </button>
                            </li>
                            <li>
                            <a href="#" className="logout d-flex align-items-center justify-content-between w-100">
                                
                                <div className="left-divu-dropdown d-flex align-items-center">
                                    <div className="imguser">
                                        <img alt="er" src={Fileimg}/>
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

        <section className="top-tabsl-div w-100">
            <ul className="d-flex align-items-center">
              <li>
                <NavLink to="/" className="comoiu-main position-relative">
                    Tasks
                    <span className="cou06">6</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="comoiu-main position-relative">
                    Ongoing
                    <span className="cou06">7</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="comoiu-main position-relative">
                    Comments
                    <span className="cou06">7</span>
                </NavLink>
              </li>
              
            </ul>

          
        </section>


        <div className="offcanvas offcanvas-end addm-nu" id="accountui">
            <button type="button" className="btn-close nt-close text-reset" data-bs-dismiss="offcanvas">
                <span>
                <img alt="cloe" src={closepic}/>
                </span>close
            </button>
 
           <div className="offcanvas-body position-relative">
       
                <div className="takyt-body">

                    <div className="d-block d-lg-none">
                    <button type="button" className="btn-close top-btnh text-reset" data-bs-dismiss="offcanvas">
                        <span>
                        <img alt="cloe" src="images/close.svg"/>
                        </span> 
                    </button>
                    </div>
                    <div className="top-headr">
                        <div className="d-flex align-items-center justify-content-between">
                            <h2> Subrata Das </h2>

                        

                            
                        </div>
                    </div>
                    <div className="row">
                    
                    <div className="col-lg-12">
                        <div className="test-block-div">
                            <div className="cont-header">
                                <h2>  Contact information </h2>
                            </div>
                            <div className="proifle-pic-name">
                                <div className="row row-cols-1 gy-4">
                                    
                                     {UserDate.map((personals, index) => (
                                            <div className="col" key={index}>
                                                <div className="form-group">
                                                    <label> {personals.label} </label>
                                                    <h5>  {personals.personal}  </h5>
                                                </div>
                                            
                                            </div>
                                    ))}
                                   
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    


                    
                </div>
               
            
           </div>
        </div>
        </>
    )
}
export default Topbar;