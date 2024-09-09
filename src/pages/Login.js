import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../img/logobi.png';
import Logimg from '../img/shapre-01.png';
import LoginForm from "../component/LoginForm";


function Login(){
    return(
        <>
         
            <section className="container-fluid px-lg-0 m-lgod-vi">

                    <div className="row g-lg-0 align-items-center justify-content-between">
                        <div className="col-lg-5 position-relative">
                            <div className="left-divu position-relative">
                        
                                <div className="como-left-divut d-inline-block w-100">
                                    <div className="top-logo-ui">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="clogo">
                                                <NavLink to="/">
                                                    <img alt="ser" src={logo}/>
                                                </NavLink>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="login-text05">
                                        <h2 className="text-white">  Your Unlimited Workplace </h2>
                                            <figure>
                                                <img alt="shape" src={Logimg} />
                                            </figure>
                                    </div>
                                </div>
                            
                            
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="right-divu-login p-0">
                                
                                <div className="texr-login col-12 px-0 px-lg-5 col-lg-8 mx-auto d-table">
                                    <h2> Login 
                                        <span className="mt-2 d-block"> Enter your Account details </span>
                                    </h2>
                                    
                                    <LoginForm/>

                                    
                                    

                                </div>
                            </div>
                        </div>
                    

                    



                    </div>

            </section>
        
        </>
    )
}
export default Login;