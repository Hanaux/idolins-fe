import React, {useState} from "react";
import {Link} from "react-router-dom";
import ContractorInfoDeletion from "./ContractorInfoDeletion";

function ContractorDeletionService() {
    const [id, setId] = useState('');
    let [modal, setModal] = useState(false);

    const onChange = (e) => {
        setId(e.target.value);
    }
    function btnTextChanger(){
        if (modal) {
            return "초기화";
        }
        else return "삭제";
    }
    const onReset=()=>{
        if (modal) {
            setId('');
        }
    }

    return (
        <div>
            <h1>계약정보 삭제서비스</h1>
            <input onChange={onChange} value={id} placeholder="삭제할 계약 ID를 입력하세요" type='number'/>
            <button onClick={()=>{
                setModal(!modal);
                onReset();
            }}>{btnTextChanger()}</button>
            {modal === true ? <ContractorInfoDeletion id={id}/> : null}
            <Link to="/contractor">
                <button>계약관리서비스 홈으로</button>
            </Link>
        </div>
    );
}

export default ContractorDeletionService;