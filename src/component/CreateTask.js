import React, { useState, useRef, useMemo } from 'react';
import closepic from "../img/close.svg";
import JoditEditor from 'jodit-react';

function CreateTask() {
    const editor = useRef(null);
	const [content, setContent] = useState('');
    const [newCompany, setCompany] = useState("");
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
                                <div className="d-flex vort algign-items-center">
                                <input className="form-control" placeholder={'Enter task name'} value={newCompany} onChange={(e) => setCompany(e.target.value)} label="Company" />
                                   
                                    <div className="form-check m-0">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" for="flexCheckDefault">
                                           High Priority
                                        </label>
                                    </div>
                                </div>
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    tabIndex={1} // tabIndex of textarea
                                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                    onChange={newContent => {}}
                                />

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