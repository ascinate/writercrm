import React, { useState, useRef, useMemo } from 'react';
import closepic from "../img/close.svg";
import { TextBox, Checkbox , DateTime, EmailInput, Telephone } from 'react-form-elements';
import Select from 'react-select';



function AddBill() {
    const editor = useRef(null);
	const [content, setContent] = useState('');
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
    const options = [
        { value: 'kaku', label: 'Kaku' },
        { value: 'dipali', label: 'Dipali' }
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
                            <h2> Add new bill </h2>


                            
                        </div>
                        
                        <div className="test-block-div">
                               
                              
                            <div className="adount">
                                <div className="form-add-fom cmg">
                                    <div className='row row-cols-1 row-cols-md-2 gy-4 g-lg-5 align-items-center'>
                                        <div class="col">
                                            <div class="form-group">
                                                <label> Order ID </label>
                                                <TextBox label="" className="form-control ms-0 ps-0 pt-0" name="oderid" required />
                                            </div>
                                            
                                            
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label> Comments </label> 
                                                <TextBox name="comments" className="form-control pt-0 ms-0 ps-0"  label=""  required/>
                                            </div>

                                        </div>

                                        <div class="col">
                                            <div class="form-group">
                                                <label> Vendor </label>
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
                                        <div class="col">
                                            <div class="form-group">
                                                <label> Delivered Date </label>
                                                <DateTime label="" className="form-control ms-0 ps-0 pt-0" name="myDate" required/>
                                                
                                            </div>
                                            
                                            
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label> Words </label>
                                                <TextBox name="role" className="form-control pt-0 ms-0 ps-0"  label=""  required/>
                                            </div>
                                            
                                            
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label> GBP </label>
                                                <TextBox name="gbp" className="form-control pt-0 ms-0 ps-0"  label=""  required/>
                                            </div>
                                            
                                            
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label> USD </label>
                                                <TextBox name="usd" className="form-control pt-0 ms-0 ps-0"  label=""  required/>
                                            </div>
                                            
                                            
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label> INR </label>
                                                <TextBox name="inr" className="form-control pt-0 ms-0 ps-0"  label=""  required/>
                                            </div>
                                            
                                            
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label> INR Conversion </label>
                                                <TextBox name="conversion" className="form-control pt-0 ms-0 ps-0"  label=""  required/>
                                            </div>
                                            
                                            
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label> Freelancer Pay </label>
                                                <TextBox name="pay" className="form-control pt-0 ms-0 ps-0"  label=""  required/>
                                            </div>
                                            
                                            
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label> Profit </label>
                                                <TextBox name="profit" className="form-control pt-0 ms-0 ps-0"  label=""  required/>
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
export default AddBill;