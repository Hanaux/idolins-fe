import React, {useState} from "react";
import InsuranceInfo from "../InsuranceSearch/InsuranceInfo";
import InsurancePermissionInfo from "./InsurancePermissionInfo";
import {Link} from "react-router-dom";

function InsurancePermissionService(){
    const [id, setId] = useState('');
    let [modal, setModal] = useState(false);
    let [modalpermit, setModalpermit] = useState(false);
    const [inputs, setInputs] = useState({
        permission : '0'
    })

    const [permission, setPermit] = useState('0');

    const onChangepermission =(e) =>{
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
        setPermit(e.target.value);
    };

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
            <h1>보험허가 등록 서비스</h1>
            <input onChange={onChange} value={id} placeholder="보험 ID를 입력하세요" type='number'/>
            <button onClick={()=>{
                setModal(!modal);
                onReset();
            }}>{btnTextChanger()}</button>
            {modal === true ? <InsuranceInfo id={id}/> : null}
            <div>
                <select value={permission} onChange={onChangepermission}>
                    <option key="0" value="0">비허용</option>
                    <option key="1" value="1">허용</option>
                </select>
                <button onClick={()=>{
                    setModalpermit(!modalpermit);
                }}>등록</button>
                {modalpermit === true ? <InsurancePermissionInfo inputs={inputs}/> : null}
            </div>
            <Link to="/insurance">
                <button>보험관리서비스 홈으로</button>
            </Link>
        </div>
    );
}

export default InsurancePermissionService;