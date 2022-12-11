import React from "react";
import {Link} from "react-router-dom";
function Home () {

    return (
        <div>
            <Link to="/customer">
                <button>고객관리서비스</button>
            </Link>
            <Link to="/insurance">
                <button>보험관리서비스</button>
            </Link>
            <Link to="/charger">
                <button>보험청구서비스</button>
            </Link>
            <Link to="/payment">
                <button>보험산출서비스</button>
            </Link>
        </div>
    );
}

export default Home;