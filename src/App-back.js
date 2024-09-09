import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import AuthLayout from "./AuthLayout.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
          
          <Routes>
             <Route excaexact="true" path="/" element={<Login />} />
              <Route element={<AuthLayout />}>
                <Route excaexact="true" path="/home" element={<Home/>} />
              </Route>
          </Routes>
       
    </Router>
  );
}

export default App;
