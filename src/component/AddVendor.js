import React, { useState, useRef, useMemo } from 'react';
import closepic from "../img/close.svg";
import { TextBox, Button } from 'react-form-elements';
import Select from 'react-select';



function AddVendor() {
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
                            <h2> Add new vendor </h2>


                            
                        </div>
                        
                        <div className="test-block-div">
                               
                              
                            <div className="adount">
                                <div className="form-add-fom cmg">
                                    <div className='row row-cols-1 row-cols-md-2 gy-4 g-lg-5 align-items-center'>
                                        <div class="col">
                                            <div class="form-group">
                                                <label> Vendor Name </label>
                                                <TextBox label="" className="form-control ms-0 ps-0 pt-0" name="oderid" required />
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
                      <Button name="btnsend" className="btn btn-aditext"
                            onClick={e => {
                                console.info('The button was clicked')
                            }}
                            >
                           Add
                            </Button>

                        <Button name="btnsend" className="btn btn-aditext ms-3"
                            onClick={e => {
                                console.info('The button was clicked')
                            }}
                            >
                           Cancel
                            </Button>
                        
                    </div>
                </div>
                
            </div>
        </div>
        </>
     );
}
export default AddVendor;