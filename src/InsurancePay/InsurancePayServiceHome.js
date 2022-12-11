import React from "react";
import {Link} from "react-router-dom";

function InsurancePayServiceHome() {

    return(
        <div>
            보험산출서비스 홈입니다.
            <Link to="/pay/calculation">
                <button>보험금산출</button>
            </Link>
            <Link to="/pay/payment">
                <button>지급품의서</button>
            </Link>
            <Link to="/pay/paycheck">
                <button>보험지급</button>
            </Link>

            <Link to="/">
                <button>홈으로 가기</button>
            </Link>
        </div>
    );
}

export default InsurancePayServiceHome;