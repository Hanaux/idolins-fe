import React from "react";
import {Link} from "react-router-dom";

function ChargerServiceHome() {

    return(
        <div>
            보험청구서비스 홈입니다.
            <Link to="/charger/charge-search">
                <button>청구정보조회</button>
            </Link>
            <Link to="/charger/charge-enrollment">
                <button>보험청구등록</button>
            </Link>
            <Link to="/charger/charge-delete">
                <button>청구정보삭제</button>
            </Link>
            <Link to="/">
                <button>홈으로 가기</button>
            </Link>
        </div>
    );
}

export default ChargerServiceHome;