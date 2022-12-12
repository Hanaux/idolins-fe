import React, {useEffect, useState} from "react";
import UnderWrite from "./UnderWrite";
import {Link} from "react-router-dom";

function UnderWriteService() {

    const [id, setId] = useState('');
    const [jobInfo, setjobInfo] = useState("");
    let [modal, setModal] = useState(false);

    const onChange = (e) => {
        setId(e.target.value);
    }

    const onChangeSelected =(e) =>{
        setjobInfo(e.target.value);
    };

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
            <div>
                <h1>계약정보 인수심사서비스</h1>
                <input onChange={onChange} value={id} placeholder="보험 ID를 입력하세요" type='number'/>
                <p>직업</p>
                <select value={jobInfo} onChange={onChangeSelected}>
                    <option key="mining" value="mining">mining</option>
                    <option key="manufacturing" value="manufacturing">manufacturing</option>
                    <option key="electricity,gas,steam,waterworks" value="electricity,gas,steam,waterworks">electricity,gas,steam,waterworks</option>
                    <option key="construction" value="construction">construction</option>
                    <option key="transport,warehousing,telecommunications" value="transport,warehousing,telecommunications">transport,warehousing,telecommunications</option>
                    <option key="forestry" value="forestry">forestry</option>
                    <option key="fishing" value="fishing">fishing</option>
                    <option key="agriculture" value="agriculture">agriculture</option>
                    <option key="financial,insurance" value="financial,insurance">financial,insurance</option>
                    <option key="others" value="others">others</option>
                </select>
            </div>
            <div>
                <button onClick={()=>{
                    setModal(!modal);
                    onReset();
                }}>{btnTextChanger()}</button>
                {modal === true ? <UnderWrite id={id} jobInfo={jobInfo}/> : null}
                <Link to="/contractor">
                    <button>계약관리서비스 홈으로</button>
                </Link>
            </div>
        </div>
    );
}

export default UnderWriteService;