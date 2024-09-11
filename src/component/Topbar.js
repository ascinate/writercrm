import React, {useState} from "react";
import logo from '../img/logobi.png';
import { NavLink } from "react-router-dom";
import Clock from 'react-live-clock';
import user from '../img/user01.svg';
import Fileimg from "../img/system-auth-form__icon-logout.svg";
import closepic from "../img/close.svg";
import { TextBox, Checkbox , DateTime, EmailInput, Telephone } from 'react-form-elements';
import Select from 'react-select';

function Topbar() {
    const UserDate = [
        { label:'Name', personal:'Mrs. Smith'  },
        { label:'E-mail', personal:'exmpale@gmail.com'  },
        { label:'Phone', personal:'+91 2560256400'  },
        { label:'Designation', personal:'Web Designer'  },
        { label:'Role', personal:'UI/UX'  },
        { label:'Created', personal:'exmpale@gmail.com'  },
    ];

    const showfind = () => {
        document.querySelector(".proifle-pic-name").classList.add('pro-div-show');
    }
    const hideFind = () => {
        document.querySelector(".proifle-pic-name").classList.remove('pro-div-show');
    }
    
    const options = [
        { value: 'webdesigner', label: 'Web Designer' },
        { value: 'marketing', label: 'Marketing' }
      ]

    const role = [
        { value: 'webdesigner', label: 'Web Designer' },
        { value: 'marketing', label: 'Marketing' }
      ]
    return(
        <>
         <div className="dashboard-head float-start w-100">
      
            <div className="d-flex align-items-center justify-content-start d-lg-none mt-4 mb-3">
               
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
                <NavLink to="/tasks" className="comoiu-main position-relative">
                    Tasks
                    <span className="cou06">6</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/ongoing" className="comoiu-main position-relative">
                    Ongoing
                    <span className="cou06">7</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/comments" className="comoiu-main position-relative">
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
                              {/* <div className="show-profiles">
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
                              </div> */}
                              <div className="edit-forms">
                                 <div className="row row-cols-1 row-cols-lg-2 gy-4">
                                        <div className="col">
                                            <div className="form-group">
                                                <label> Name </label>
                                                <TextBox label="" className="form-control cm-news mt-2 cm-input1 ms-0 ps-0 pt-0" name="names" initialValue="james" required />
                                            </div>
                                        
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label> E-mail </label>
                                                <EmailInput name="emailbox" className="form-control  mt-2 cm-news cm-input1 ms-0 ps-0 pt-0" label="" initialValue="nospam@example.com" required/>
                                               
                                            </div>
                                        
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label> Phone </label>
                                                <Telephone label="" name="myTelephone" className="form-control mt-2 cm-news cm-input1 ms-0 ps-0 pt-0" initialValue="18025105" required />
                                          
                                               
                                            </div>
                                        
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label> Designation </label>
                                                <Select options={options}  className="mt-2 cm-dops" />
                                               
                                               
                                            </div>
                                        
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label> Role </label>
                                                <Select options={role} className="mt-2 cm-dops" />
                                               
                                               
                                            </div>
                                        
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label> Created </label>
                                                <TextBox label="" className="form-control mt-2 cm-news cm-input1 ms-0 ps-0 pt-0" name="created" initialValue="exmpale@gmail.com" required />
                                            </div>
                                        
                                        </div>
                                 </div>
                              </div>
                               
                            </div>
                        </div>
                    </div>
                    </div>
                    


                    
                </div>

                <div className="footer-diuv-modal">
                    <div className="d-flex align-items-center">
                   
                        <button type="button" className="btn btn-aditext" onClick={showfind} >  Update 
                        </button>
                        <button type="button" className="btn btn-aditext ms-3" onClick={hideFind} >  Cancel
                        </button>
                       
                    </div>
                </div>
               
            
           </div>
        </div>
        </>
    )
}
export default Topbar;