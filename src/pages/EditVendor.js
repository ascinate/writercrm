import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import { NavLink } from "react-router-dom";
import { TextBox, Button } from 'react-form-elements';

function EditVendor(){



    return(
        <>
         <Sidebar/>
          <main className="float-end content-wrapper">
             <Topbar/>
             <section className="top-sectioun d-inline-block w-100">
                <div className="d-flex top-boer-ali align-items-center">
                    <div className="left-texr">
                       <h2 className="text-white titels-01"> Edit Vendor </h2>
                    </div>
                    <div className="right-serach-div col-lg-9 d-flex align-items-center ps-5">
                        
                    </div>
                </div>
               
             </section>
             <section className="mail-sercotu new-data d-inline-block w-100 mt-4">
                <div className="onisde d-inline-block w-100 position-relative"> 
                    <div className="form-add-fom">
                        <div className="row row-cols-1 row-cols-md-2 gy-4 g-lg-5 align-items-center">
                            <div className="col">
                                <div className="form-group">
                                    <label> Vendor </label>
                                    <TextBox label="" className="form-control cm-input1" name="vendorname"  required/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center mt-5 svaed-divu">
                    <Button className="btn btn-pause"
                        onClick={e => {
                            console.info('The button was clicked')
                        }}
                        >   
                        Save       
                    </Button>
                    <NavLink to="/vendor" className="btn cm-btny btn-pause cancel-btn ms-3">   
                        Close     
                    </NavLink>
                   
               </div>
             </section>
          </main>


        </>
    )
}
export default EditVendor;