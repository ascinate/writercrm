import { Outlet } from "react-router-dom";
import Sidebar from "./component/Sidebar";

function AuthLayout(){
    return(
        <>
        <section className="d-flex align-items-start bodyt">
            <Sidebar/>
            
        </section>

         <Outlet />
        </>
    )
}
export default AuthLayout;