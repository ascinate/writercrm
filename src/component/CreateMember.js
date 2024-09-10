import React, { useState, useRef, useMemo } from 'react';
import closepic from "../img/close.svg";
import { TextBox, Checkbox , DateTime, EmailInput, Telephone } from 'react-form-elements';
import Select from 'react-select';



function CreateMember() {
    const editor = useRef(null);
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

   

      const notify = () => {
        document.querySelector("#ctar-div-pt").classList.toggle('own-div-show');
      }
      
     

     return(
        <>
        <button type="button" className="btn btn-catrea ctre-2" data-bs-toggle="offcanvas" data-bs-target="#addnew">
            Create
        </button>

        <div className="offcanvas offcanvas-end addm-nu" id="addnew">
            <button type="button" className="btn-close nt-close text-reset" data-bs-dismiss="offcanvas">
                <span>
                <img alt="cloe" src={closepic}/>
                </span> Contact
            </button>
 
            <div className="offcanvas-body position-relative">
                
                <div className="takyt-body ">

                    <div className="d-block d-lg-none">
                        <button type="button" className="btn-close top-btnh text-reset" data-bs-dismiss="offcanvas">
                            <span>
                            <img alt="cloe" src={closepic}/>
                            </span> 
                        </button>
                    </div>

                    <div className="top-headr">
                        <div className="d-flex align-items-center justify-content-between">
                            <h2> Add new user </h2>


                            
                        </div>
                        
                        <div className="test-block-div">
                                <div className="d-flex vort algign-items-center mb-3">
                                   <TextBox label="" className="form-control" name="inputWithNativeAttributesname" required placeholder="Enter task name" />
                                   
                                    <div className="form-check m-0">
                                      <Checkbox
                                        label=" High Priority"
                                        isChecked={false}
                                        name="check"
                                        value="checkpoint"
                                        />
                                      
                                    </div>
                                </div>
                              
                            <div className="adount">
                                <div className="form-add-fom cmg">
                                    <div className='row row-cols-1 row-cols-md-2 gy-4 g-lg-5 align-items-center'>
                                        <div class="col">
                                            <div class="form-group">
                                                <label> Name </label>
                                                <TextBox label="" className="form-control ms-0 ps-0 pt-0" name="membername" required />
                                            </div>
                                            
                                            
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label> E-mail </label> 
                                                <EmailInput name="emailbox" className="form-control pt-0 ms-0 ps-0"  label="" initialValue="" required/>
                                            </div>

                                        </div>

                                        <div class="col">
                                            <div class="form-group">
                                                <label> Phone </label>
                                                <Telephone label="" className="form-control pt-0 ms-0 ps-0" name="myTelephone" required/>
                                            </div>

                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label> Designation </label>
                                                <TextBox label="" className="form-control ms-0 ps-0 pt-0" name="designation" required />
                                            </div>
                                            
                                            
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label> Role </label>
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
                                    </div>
                                </div>
                            </div>
                            

                              

                            </div>
                    </div>
                    


                    
                </div>
                <div className="footer-diuv-modal">
                    <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-aditext"> Add </button>
                        <button type="button" className="btn btn-aditext ms-3"> Cancel </button>
                    </div>
                </div>
                
            </div>
        </div>
        </>
     );
}
export default CreateMember;