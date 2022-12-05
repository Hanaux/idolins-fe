import React from "react";
import {BrowserRouter, Link, Route, Router, Routes, useNavigate} from "react-router-dom";
import CustomerSearchService from "./CustomerSearchService";
function Home () {

    return (
            <div>
                <Link to="/CSearch">
                    <button>고객정보조회</button>
                </Link>
            </div>
    );
}

export default Home;