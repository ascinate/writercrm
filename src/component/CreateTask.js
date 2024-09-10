import React, { useState, useRef, useMemo } from 'react';
import closepic from "../img/close.svg";
import JoditEditor from 'jodit-react';
import FileUpload from './FileUpload';
import { TextBox, Checkbox , DateTime } from 'react-form-elements';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';



function CreateTask() {
    const editor = useRef(null);
	const [content, setContent] = useState('');
    const options = [
        { value: 'sneha', label: 'Sneha' },
        { value: 'saswati', label: 'Saswati' },
        { value: 'shreyasee', label: 'Shreyasee' }
      ]

    const optionss = [
        { value: 'alabama', label: 'Alabama Due' },
        { value: 'rose', label: 'Rose Marry' },
        { value: 'james', label: 'James Jone' }
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
                </span> Task
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
                            <h2> New task </h2>


                            
                        </div>
                        
                        <div className="test-block-div">
                                <div className="d-flex vort algign-items-center mb-3">
                                   <TextBox label="" className="form-control" name="inputWithNativeAttributes" required placeholder="Put some text here" />
                                   
                                    <div className="form-check m-0">
                                      <Checkbox
                                        label=" High Priority"
                                        isChecked={false}
                                        name="check"
                                        value="checkpoint"
                                        />
                                      
                                    </div>
                                </div>
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    tabIndex={1} 
                                    config={{
                                        buttons: [ 'undo','redo','bold', 'italic', 'underline', 'strikethrough ', 'ul' ,'ol','paragraph','file','image','video','paste','selectall','table','link','indent','outdent','left'],
                                        readonly: false,
                                        toolbarAdaptive: false,
                                      }}
                                    onBlur={newContent => setContent(newContent)} 
                                    onChange={newContent => {}}
                                />

                              <div className="group-btnyiu upload__box">
                                   <FileUpload/>
                              </div>

                              <div className="minku-div">
                                  <div className="comoniut-listr d-md-flex align-items-center w-100"> 
                                       <div className="form-group boeder-top d-md-flex align-items-center">
                                           <label> Responsible person </label>
                                           <div class="selet-douvi">
                                              <Select options={options} />
                                           </div>

                                           
                                            <button type="button" className="btn comon-btn-ree cert-by register-btn2" onClick={notify} > Participants 
                                            </button>
                                       </div>
                                       
                                  </div>
                                  <div id="ctar-div-pt">
                                        <div className="comoniut-listr d-md-flex align-items-center w-100">
                                            <div className="form-group boeder-top d-md-flex align-items-center">
                                                <label> Participants
                                                </label>
                                                <div className="selet-douvi">
                                                   <Select options={optionss} />
                                                   
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                  </div>
                              </div>
                              <div className='comoniut-listr d-md-flex align-items-center w-100 sp-marginu'>
                                   <div className='form-group dateo boeder-top d-md-flex align-items-center'>
                                       <label> Deadline </label>
                                       <div className='selet-douvi'>
                                             <DateTime label="" type="datetime-local" name="myDateTimeLocal"  />
                                        </div>
                                   </div>
                                   
                                   
                              </div>

                            </div>
                    </div>
                    


                    
                </div>
                <div className="footer-diuv-modal">
                    <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-aditext"> Add task (Ctrl + Enter) </button>
                        <button type="button" className="btn btn-aditext ms-3"> Add task and create another one </button>
                        <button type="button" className="btn btn-aditext ms-3"> Cancel </button>
                    </div>
                </div>
                
            </div>
        </div>
        </>
     );
}
export default CreateTask;