import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import AuthLayout from "./AuthLayout.js";
import Login from "./pages/Login.js";
import Tasks from "./pages/Tasks.js";
import ManageUser from "./pages/ManageUser.js";
import Billing from "./pages/Billing.js";
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
                  </Routes>
             </div>
             
          </Router>

  );
}

export default App;
