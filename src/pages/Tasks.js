import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";

function Tasks(){
    return(
        <>
         <Sidebar/>
          <main className="float-end content-wrapper">
             <Topbar/>
             <section className="d-flex align-items-start bodyt">
               
             </section>
          </main>


        </>
    )
}
export default Tasks;