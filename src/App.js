import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import AuthLayout from "./AuthLayout.js";
import Login from "./pages/Login.js";
import Tasks from "./pages/Tasks.js";
import ManageUser from "./pages/ManageUser.js";
import Billing from "./pages/Billing.js";
import Vendor from "./pages/Vendor.js";
import EditVendor from "./pages/EditVendor.js";
import EditMember from "./pages/EditMember.js";
import EditTask from "./pages/EditTask.js";
import EditComment from "./pages/EditComment.js";
import { BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";

function App() {
  return (
   
          <Router>
             <div className="dahbo-dd">
                  <Routes> 
                    <Route excaexact="true" path="/" element={<Login />} />
                    <Route excaexact="true" path="/tasks" element={<Tasks/>} />
                    <Route excaexact="true" path="/manage-user" element={<ManageUser/>} />
                    <Route excaexact="true" path="/billing" element={<Billing/>} />
                    <Route excaexact="true" path="/vendor" element={<Vendor/>} />
                    <Route excaexact="true" path="/editvendor" element={<EditVendor/>} />
                    <Route excaexact="true" path="/edit-member" element={<EditMember/>} />
                    <Route excaexact="true" path="/edit-task" element={<EditTask/>} />
                    <Route excaexact="true" path="/edit-comment" element={<EditComment/>} />
                  </Routes>
             </div>
             
          </Router>

  );
}

export default App;
