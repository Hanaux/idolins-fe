import './App.css';
// import Customers from './Customer';
import Users from "./Users";
import CustomerSearchService from "./CustomerSearchService";
import Home from "./Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
function App() {
  return (
  <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/CSearch" element={<CustomerSearchService/>} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
