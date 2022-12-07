import React, {useState} from "react";
import CustomerInfo from "./CustomerInfo";
import {Link} from "react-router-dom";

function CustomerSearchService(){
    const [id, setId] = useState('');
    let [modal, setModal] = useState(false);

    const onChange = (e) => {
        setId(e.target.value);
    }
    function btnTextChanger(){
        if (modal) {
            return "초기화";
        }
        else return "조회";
    }
    const onReset=()=>{
        if (modal) {
            setId('');
        }
    }

    return (
        <div>
            <h1>고객정보 조회서비스</h1>
            <input onChange={onChange} value={id} placeholder="고객 ID를 입력하세요" type='number'/>
            <button onClick={()=>{
                setModal(!modal);
                onReset();
            }}>{btnTextChanger()}</button>
            {modal === true ? <CustomerInfo id={id}/> : null}
            <Link to="/customer">
                <button>고객관리서비스 홈으로</button>
            </Link>
        </div>
    );
}

export default CustomerSearchService;