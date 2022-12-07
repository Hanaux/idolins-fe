import './App.css';
import CustomerSearchService from "./Customer/CustomerSearch/CustomerSearchService";
import Home from "./Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import CustomerServiceHome from "./Customer/CustomerServiceHome";
import CustomerEnrollService from "./Customer/CustomerEnrollment/CustomerEnrollService";
import CustomerDeletionService from "./Customer/CustomerDeletion/CustomerDeletionService";
import InsuranceSearchService from "./Insurance/InsuranceSearch/InsuranceSearchService";
import InsuranceServiceHome from "./Insurance/InsuranceServiceHome";
import InsuranceEnrollService from "./Insurance/InsuranceEnrollment/InsuranceEnrollService";
import InsurancePermissionService from "./Insurance/InsurancePermission/InsurancePermissionService";
import InsuranceDeleteService from "./Insurance/InsuranceDelete/InsuranceDeleteService";
function App() {
  return (
  <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/customer" element={<CustomerServiceHome/>} />
      <Route path="/customer/cust-search" element={<CustomerSearchService/>} />
      <Route path="/customer/cust-enrollment" element={<CustomerEnrollService/>}/>
      <Route path="/customer/cust-deletion" element={<CustomerDeletionService/>}/>
      <Route path="/insurance" element={<InsuranceServiceHome/>}/>
      <Route path="/insurance/ins-search" element={<InsuranceSearchService/>} />
      <Route path="/insurance/ins-enrollment" element={<InsuranceEnrollService/>}/>
      <Route path="/insurance/ins-permission" element={<InsurancePermissionService/>}/>
      <Route path="/insurance/ins-delete" element={<InsuranceDeleteService/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
