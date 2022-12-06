import './App.css';
import CustomerSearchService from "./Customer/CustomerSearch/CustomerSearchService";
import Home from "./Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import CustomerServiceHome from "./Customer/CustomerServiceHome";
import CustomerEnrollService from "./Customer/CustomerEnrollment/CustomerEnrollService";
function App() {
  return (
  <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/customer" element={<CustomerServiceHome/>} />
      <Route path="/customer/cust-search" element={<CustomerSearchService/>} />
      <Route path="/customer/cust-enrollment" element={<CustomerEnrollService/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
