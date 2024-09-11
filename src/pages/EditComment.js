import React, { useState, useRef } from "react";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import JoditEditor from 'jodit-react';
import { Button } from 'react-form-elements'
import { NavLink } from "react-router-dom";


function EditComment(){
    const editor = useRef(null);
    const [content, setContent] = useState('');

    return(
        <>
         <Sidebar/>
          <main className="float-end content-wrapper">
             <Topbar/>
             
             <section className="mail-sercotu new-data d-inline-block w-100 mt-4">
                <div className="onisde d-inline-block w-100 position-relative"> 
                    <div className="p-4">
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
                    </div>
                    <div className="footer-list02">
                        <div className="d-flex align-items-center">
                           <Button name="btnupdate" className="btn btn-pause"
                            onClick={e => {
                                console.info('The button was clicked')
                            }}
                            >
                            Update
                            </Button>
                            <NavLink to="/edit-task" className="btn ps-btn btn-pause cancel-btn ms-3">
                               Cancel
                            </NavLink>
                        
                        </div>
                    </div>
                </div>
             </section>
          </main>


        </>
    )
}
export default EditComment;