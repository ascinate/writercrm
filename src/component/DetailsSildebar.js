import React from "react";
import { TextBox,  DateTime, Button } from 'react-form-elements';
import User from "../img/chatpi.svg";
import Select from 'react-select';

function DetailsSildebar() {
    const options = [
        { value: 'sneha', label: 'Sneha' },
        { value: 'saswati', label: 'Saswati' },
        { value: 'shreyasee', label: 'Shreyasee' }
      ]

      const participants = [
        { value: 'sneha', label: 'Sneha' },
        { value: 'saswati', label: 'Saswati' },
        { value: 'shreyasee', label: 'Shreyasee' }
      ]
     return(
        <>
         <div className="right-details-projects05 mt-5 mt-lg-0">
                <div className="topi-head">
                    <h2 className="text-white"> In Progress since 23/01/2024 8:01 pm </h2>
                </div>
                <div className="robud-text">
                    <ul className="lsiu-you">
                        <li>
                            <span> Deadline: </span>
                            <div className="dropdown nyte-div">
                                <button class="btn protxrt dropdown-toggle close-dp" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                25/01/2024 7:00 pm
                                </button>
                                <ul className="dropdown-menu smuy " aria-labelledby="dropdownMenuClickableInside">
                                    <li>
                                        <a id="clio" className="clois"> <i className="fas fa-times"></i> </a>
                                    </li>
                                    <li className="mt-top">
                                        <DateTime label="" className="form-control ps-0 pt-0 cm-input1" type="datetime-local" name="myDateTimeLocal"  />
                                    </li>
                                    <li>
                                       <Button name="btnsend" className="btn btn-save"
                                        onClick={e => {
                                            console.info('The button was clicked')
                                        }}
                                        >
                                         Save Change
                                        </Button>
                                        
                                    </li>
                                
                                </ul>
                            </div>
                            
                        </li>
                        
                        <li>
                            <span> Created on: </span>
                            <span className="protxrt">
                                25/01/2024 11:46 pm
                            </span>
                        </li>
                        <li>
                            <span> Rating:</span>
                            <span className="protxrt">
                                None
                            </span>
                        </li>
                    </ul>

                    <div className="creatre-divu">
                            <div className="d-flex bort-t justify-content-between align-items-center w-100">
                            <h4> Created by </h4>
                            

                            <div className="dropdown">
                                <button className="btn bnhu btn-chat dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                Change
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end shou05" aria-labelledby="dropdownMenuButton1">
                                <li>
                                   <Select options={options} />
                                </li>
                                <li>
                                    <button type="button" id="btnFilter" className="btn btn-sm btn-success01">Save Change</button>
                                </li>
                                
                                </ul>
                            </div>
                            

                            

                            </div>
                                      
                                        
                            <div className="comonil-user my-4">
                                <a href="#" className="d-flex align-items-center w-100">
                                    <div className="imgpiu">
                                        <img alt="su" src={User}/>
                                    </div>
                                    <span> Subhojit Adhikary </span>
                                </a>
                            </div>

                            <div className="collapse" id="crate-pers">
                                <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>

                    </div>

                    <div className="creatre-divu">

                        <div className="d-flex bort-t justify-content-between align-items-center w-100">
                            <h4> Participants </h4>
                            

                            <div className="dropdown">
                            <button className="btn bnhu btn-chat dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                Change
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end shou05" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <Select options={participants} />
                                </li>
                                <li>
                                <button type="button" id="btnFilter2" className="btn btn-sm btn-success01">Save Change</button>
                                </li>
                                
                            </ul>
                            </div>
                            

                            

                        </div>
                        <div className="comonil-user my-4">
                            <a href="#" className="d-flex align-items-center w-100">
                                <div className="imgpiu">
                                        <img alt="su" src={User}/>
                                </div>
                                <span> Sandeep Adhikary </span>
                            </a>
                        </div>

                    </div>
                </div>
         </div>
        </>
     )
}
export default DetailsSildebar;