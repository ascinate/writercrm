import React from "react";
import { NavLink } from "react-router-dom";

function LoginForm(){
    return(
        <>
         <form method="get" action="bn" className="needs-validation" novalidate>
            
         <  div className="form-group cm-fild">
                <label>Your Email / Phonenumber </label>
                <input type="email" className="form-control" id="validationCustom01" name="username" required/>
                 <div class="invalid-feedback">
                    Please choose a username.
                 </div>
            </div>
            <div className="form-group cm-fild">
                <label>Password</label>
                <input type="password" className="form-control" name="password" required/>
                <div class="invalid-feedback">
                    Please choose a Password.
                 </div>
            </div>

            

            


            <div className="diuy-div d-sm-flex align-items-center justify-content-between">
                <NavLink to="/tasks" className="btn btn-left-btn w-100"> Login </NavLink>

            </div>
         </form>
        </>
    )
}
export default LoginForm; 