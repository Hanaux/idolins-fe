import React from "react";
import {Link} from "react-router-dom";

function CustomerServiceHome() {

    return(
        <div>
            고객관리서비스 홈입니다.
            <Link to="/customer/cust-search">
                <button>고객정보조회</button>
            </Link>
            <Link to="/customer/cust-enrollment">
                <button>고객정보등록</button>
            </Link>
            <Link to="/">
                <button>홈으로 가기</button>
            </Link>
        </div>
    );
}

export default CustomerServiceHome;