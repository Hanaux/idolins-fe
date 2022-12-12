import React from "react";
import {Link} from "react-router-dom";

function ContractorServiceHome() {

    return (
        <div>
            <div>계약관리서비스 홈입니다.</div>
            <div>
                <Link to="/contractor/cont-search">
                    <button>계약정보조회</button>
                </Link>
                <Link to="/contractor/cont-enrollment">
                    <button>계약정보등록</button>
                </Link>
                <Link to="/contractor/cont-deletion">
                    <button>계약정보삭제</button>
                </Link>
                <Link to="/contractor/cont-modify">
                    <button>계약정보수정</button>
                </Link>
                <Link to="/contractor/underwrite">
                    <button>계약인수심사</button>
                </Link>
            </div>
            <div>
                <Link to="/">
                    <button>홈으로 가기</button>
                </Link>
            </div>
        </div>
    );
}

export default ContractorServiceHome;