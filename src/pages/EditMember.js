import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import { NavLink } from "react-router-dom";
import { TextBox, Button, EmailInput, Telephone } from 'react-form-elements';
import Select from 'react-select';


function EditMember(){
	const [content, setContent] = useState('');
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
    const options = [
        { value: 'editor', label: 'Editor' },
        { value: 'administrator', label: 'Administrator' },
        { value: 'writer', label: 'Writer' }
      ]
    return(
        <>
         <Sidebar/>
          <main className="float-end content-wrapper">
             <Topbar/>
             <section className="top-sectioun d-inline-block w-100">
                <div className="d-flex top-boer-ali align-items-center">
                    <div className="left-texr">
                       <h2 className="text-white titels-01"> Amritnendu </h2>
                    </div>
                    <div className="right-serach-div col-lg-9 d-flex align-items-center ps-5">
                        
                    </div>
                </div>
               
             </section>
             <section className="mail-sercotu new-data d-inline-block w-100 mt-4">
                
                <div className="onisde d-inline-block w-100 position-relative"> 
                    <div className="topi-head">
                        <div className="d-flex align-items-center justify-content-between">
                            <h2> Edit Details </h2>
                        </div>
                    </div>
                    <div className="form-add-fom">
                        <div className="row px-lg-4 row-cols-1 row-cols-md-2 gy-4 g-lg-5 align-items-center">
                            <div className="col">
                                <div className="form-group">
                                    <label> Vendor </label>
                                    <TextBox label="" className="form-control pt-0 cm-input1" name="vendorname"  required/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label> E-mail </label>
                                    <EmailInput  name="emailboxc" className="form-control pt-0 cm-input1" label="" initialValue=""/>
                                   
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label> Phone </label>
                                    <Telephone label="" className="form-control pt-0 cm-input1" name="myTelephone" required/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label> Designation </label>
                                    <TextBox label="" className="form-control pt-0 cm-input1" name="designation" required/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label className="mb-2"> Role </label>
                                    <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            isDisabled={isDisabled}
                                            isLoading={isLoading}
                                            isClearable={isClearable}
                                            isRtl={isRtl}
                                            isSearchable={isSearchable}
                                            name="color"
                                            options={options}
                                        />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label> Password </label>
                                    <TextBox label="" initialValue="nospam@" className="form-control pt-0 cm-input1" name="designation" required/>
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
export default EditMember;