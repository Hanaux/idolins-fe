import React, {useState} from "react";
import ContractorList from "./ContractorList";
import {Link} from "react-router-dom";

function ContractorModifyService() {

    const [custID, setCustID] = useState(null);

    const [doSearch, setDoSearch] = useState(false);

    const onChange =(e) => {
        const{value} = e.target;
        setCustID(value)
    };

    return (
        <div>
            <div>
                <input name="custID" placeholder="고객 ID" onChange={onChange} value={custID}/>
                <button onClick={() => setDoSearch(!doSearch)}>검색</button>
                <Link to="/contractor">
                    <button>계약관리서비스 홈으로</button>
                </Link>
            </div>
            <div>
                {doSearch == true ? <ContractorList id={custID}/> : null}
            </div>
        </div>
    );
}

export default ContractorModifyService;