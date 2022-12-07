import React from "react";
import {Link} from "react-router-dom";

function CustomerServiceHome() {

    return(
        <div>
            보험관리서비스 홈입니다.
            <Link to="/insurance/ins-search">
                <button>보험정보조회</button>
            </Link>
            <Link to="/insurance/ins-enrollment">
                <button>보험정보등록</button>
            </Link>
            <Link to="/insurance/ins-permission">
                <button>보험허가등록</button>
            </Link>
            <Link to="/insurance/ins-delete">
                <button>보험정보삭제</button>
            </Link>
            <Link to="/">
                <button>홈으로 가기</button>
            </Link>
        </div>
    );
}

export default CustomerServiceHome;