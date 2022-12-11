import './App.css';
import CustomerSearchService from "./Customer/CustomerSearch/CustomerSearchService";
import Home from "./Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import CustomerServiceHome from "./Customer/CustomerServiceHome";
import CustomerEnrollService from "./Customer/CustomerEnrollment/CustomerEnrollService";
import InsuranceServiceHome from "./Insurance/InsuranceServiceHome";
import InsuranceEnrollService from "./Insurance/InsuranceEnrollment/InsuranceEnrollService";
import InsuranceSearchService from "./Insurance/InsuranceSearch/InsuranceSearchService";
import InsurancePermissionService from "./Insurance/InsurancePermission/InsurancePermissionService";
import InsuranceDeleteService from "./Insurance/InsuranceDelete/InsuranceDeleteService";
import InsurancePayServiceHome from "./InsurancePay/InsurancePayServiceHome";
import CalculationService from "./InsurancePay/Calculation/CalculationService";
import PaymentService from "./InsurancePay/Payment/PaymentService";
import PaycheckService from "./InsurancePay/Paycheck/PaycheckService";
import ChargerServiceHome from "./Charger/ChargerServiceHome";
import ChargerEnrollService from "./Charger/ChargerEnrollment/ChargerEnrollService";
import ChargerSearchService from "./Charger/ChargerSearch/ChargerSearchService";
import ChargerDeleteService from "./Charger/ChargerDelete/ChargerDeleteService";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/customer" element={<CustomerServiceHome/>} />
            <Route path="/customer/cust-search" element={<CustomerSearchService/>} />
            <Route path="/customer/cust-enrollment" element={<CustomerEnrollService/>}/>
            <Route path="/insurance" element={<InsuranceServiceHome/>}/>
            <Route path="/insurance/ins-search" element={<InsuranceSearchService/>} />
            <Route path="/insurance/ins-enrollment" element={<InsuranceEnrollService/>}/>
            <Route path="/insurance/ins-permission" element={<InsurancePermissionService/>}/>
            <Route path="/insurance/ins-delete" element={<InsuranceDeleteService/>}/>
            <Route path="/pay" element={<InsurancePayServiceHome/>}/>
            <Route path="/pay/calculation" element={<CalculationService/>}/>
            <Route path="/pay/payment" element={<PaymentService/>}/>
            <Route path="/pay/paycheck" element={<PaycheckService/>}/>
            <Route path="/charger" element={<ChargerServiceHome/>}/>
            <Route path="/charger/charge-search" element={<ChargerSearchService/>}/>
            <Route path="/charger/charge-enrollment" element={<ChargerEnrollService/>}/>
            <Route path="/charger/charge-delete" element={<ChargerDeleteService/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;