import React, { useState, useRef, useMemo } from 'react';
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import { NavLink } from "react-router-dom";
import { TextBox, Button, EmailInput, Telephone } from 'react-form-elements';
import Select from 'react-select';
import FileUploadEdit from "../component/FileUploadEdit";
import ReplyFileUpload from "../component/ReplyFileUpload";
import DetailsSildebar from '../component/DetailsSildebar';
import JoditEditor from 'jodit-react';
import User from "../img/chatpi.svg";


function EditTask(){
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [showreply, setShowReply] = React.useState(false);

    const ReplyDate = [
        { name:'Admin', comments:'Hellow World', file: ['ak0307sangeeta2500wordsdatadrivendecisions.zip,']  },
        { name:'Amritnendu', comments:'Changes required Deadline - 28th March 2024', file: ''},
        { name:'Admin', comments:'1. I was provided with 1800 words +500 for calulation .. So I wrote 1831 (31 words extra). Conclusion and recomendation 2.', file: ''  },
       
    ];
 
    return(
        <>
         <Sidebar/>
          <main className="float-end content-wrapper">
             <Topbar/>
             <section className="top-sectioun d-inline-block w-100">
                <div className="d-flex top-boer-ali align-items-center">
                    <div className="left-texr">
                       <h2 className="text-white titels-01"> AK0307 Sangeeta 2500 words Data driven decisions </h2>
                    </div>
                    
                </div>
               
             </section>
             <section className="mail-sercotu d-inline-block w-100">
                
                <div className="onisde details-projects d-inline-block w-100 position-relative"> 
                   <div className="row">
                      <div className="col-lg-8">
                          <div className="comon-projetcs-details bg-white">
                               <div className="topi-head">
                                    <h2> Task #1 - in progress </h2>
                                </div>
                                <div className="textt-div w-100 px-4 my-3 d-inline-block">
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        tabIndex={1} 
                                        config={{
                                            buttons: [ 'undo','redo','bold', 'italic', 'strikethrough ', 'ul' ,'ol','paragraph','file','image','video','selectall','table','link','indent','outdent',],
                                            readonly: false,
                                            toolbarAdaptive: false,
                                        }}
                                        onBlur={newContent => setContent(newContent)} 
                                        onChange={newContent => {}}
                                    />
                                    <FileUploadEdit/>
                                </div>
                          </div>
                          <div className='footer-list02'>
                             <div className='d-flex align-items-center'>
                                   <Button name="btnupdate" className="btn btn-pause"
                                    onClick={e => {
                                        console.info('The button was clicked')
                                    }}
                                    >
                                     Update 
                                    </Button>
                                    <Button disabled name="btnfinish" className="btn btn-pause ms-3"
                                    onClick={e => {
                                        console.info('The button was clicked')
                                    }}
                                    >
                                      Finish 
                                    </Button>
                                    <Button name="btnresume" className="btn btn-pause ms-3"
                                    onClick={e => {
                                        console.info('The button was clicked')
                                    }}
                                    >
                                       Resume 
                                    </Button>

                                    <NavLink to="/tasks" className="btn sp-line-height btn-pause cancel-btn ms-3" >
                                       Cancel 
                                    </NavLink>
                             </div>
                          </div>
                      </div>

                      <div className='col-lg-4'>
                         <DetailsSildebar/>
                      </div>
                        
                   </div>   
                   <div className='row mt-4'>
                       <div className='col-lg-8'>
                          <div className='stop-margin'>
                              <div className='tab-utsy w-100 d-inline-block mt-0'>
                                 <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                      <button className="nav-link active"
                                      data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" >Comments <span className="nuoi08">3</span> </button>
                                    </li>
                                 </ul>  
                                 <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel">
                                          <div className="comooments-ser">
                                              {ReplyDate.map((personals, index) => (
                                               <div id="comiuy" className="comment-hsow w-100" key={index}>
                                                    <div className="d-flex align-items-start">
                                                        <figure className="m-0">
                                                            <img alt="chat" src={User}/>
                                                        </figure>

                                                        <div className="right-houw ms-3 position-relative">
                                                        
                                                        <div className="indoi">
                                                            <h5 className="nametxe"> {personals.name}  </h5>
                                                            <p> Hellow World {personals.comments} </p>
                                                            <p className='file-colors'> {personals.file} </p>
                                                        </div>
                                                            <ul className="d-flex rplyt-group align-items-center mt-2">
                                                            <li className="d-flex lign-items-center">
                                                                
                                                                <button className="ms-3 relty-btn" onClick={() => setShowReply(true)}>
                                                                    Reply
                                                                </button>
                                                               
                                                                
                                                            </li>
                                                            <li className="dropdown ms-3">
                                                                <button className="btn p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                More
                                                                </button>
                                                                <ul className="dropdown-menu spoicola" aria-labelledby="dropdownMenuButton1">
                                                                    <li><NavLink to="/edit-comment" className="dropdown-item" id="deit1">Edit</NavLink></li>
                                                                    <li>
                                                                          <Button className="dropdown-item"
                                                                                onClick={e => {
                                                                                    console.info('The button was clicked')
                                                                                }}
                                                                                >
                                                                                Delete
                                                                                </Button>
                                                                      </li>
                                                                </ul>
                                                            </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                               ))}
                                                
                                               
                                                {showreply && 
                                                    <div className='messge-chat'>
                                                       <div className='d-flex align-items-start'>
                                                            <figure className="m-0">
                                                                <img alt="chat" src={User}/>
                                                            </figure>
                                                            <div className='chat-boxu05 ms-3'>
                                                                <div className='cht p-0'>
                                                                       <JoditEditor
                                                                            ref={editor}
                                                                            value={content}
                                                                            tabIndex={1} 
                                                                            config={{
                                                                                buttons: [ 'undo','redo','bold', 'italic', 'strikethrough ', 'ul' ,'ol','paragraph','file','image','video','selectall','table','link','indent','outdent',],
                                                                                readonly: false,
                                                                                toolbarAdaptive: false,
                                                                            }}
                                                                            onBlur={newContent => setContent(newContent)} 
                                                                            onChange={newContent => {}}
                                                                        />
                                                                    <ReplyFileUpload/>
                                                                </div>

                                                                <div className='d-flex align-items-center group-send01 ms-0'>
                                                                   <Button name="btnsend" className="btn btn-send"
                                                                    onClick={e => {
                                                                        console.info('The button was clicked')
                                                                    }}
                                                                    >
                                                                    Save
                                                                    </Button>

                                                                    <button className="ms-3 btn btn-send2" onClick={() => setShowReply(false)}>
                                                                       Cancel
                                                                    </button>
                                                                </div>
                                                                
                                                            </div>
                                                       </div>
                                                    </div>
                                                }
                                                

                                               
                                          </div>
                                    </div>
                                 </div>
                              </div>  
                          </div>  
                      </div> 
                   </div>           
                </div>
                
             </section>
          </main>


        </>
    )
}
export default EditTask;