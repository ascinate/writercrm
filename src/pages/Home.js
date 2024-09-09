import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import Sidebar from "../component/Sidebar";
import EmailEdit from "../component/EmailEdit";

function Home(){
    return(
        <>
       
          <main className="dahbo-dd">
             <section className="d-flex align-items-start bodyt">
                <Sidebar/>
                <EmailEdit/>
             </section>
          
             
          </main>


        </>
    )
}
export default Home;