import React, {useState} from "react";
import InsuranceInfo from "../InsuranceSearch/InsuranceInfo";
import InsurancePermissionInfo from "./InsurancePermissionInfo";
import {Link} from "react-router-dom";

function InsurancePermissionService(){
    const [id, setId] = useState('');
    let [modal, setModal] = useState(false);
    let [modalpermit, setModalpermit] = useState(false);

    const [inputs, setinputs] = useState({

    });

    const [permission, setPermit] = useState('0');

    const onChangepermission =(e) =>{
        const{value, name} = e.target;
        setPermit(e.target.value);
        setinputs(
            {
                ...inputs,
                [name]: value
            })
        console.log(inputs);
    };

    const onChange = (e) => {
        const{value, name} = e.target;
        setId(e.target.value);
        setinputs(
            {
                ...inputs,
                [name]: value
            })
        console.log(inputs);
    }

    function btnTextChanger(){
        if (modal) {
            return "초기화";
        }
        else return "조회";
    }

    function btn2TextChanger(){
        if (modalpermit) {
            return "확인";
        }
        else return "등록";
    }

    const onReset=()=>{
        if (modal) {
            setId('');
        }
    }

    return (
        <div>
            <h1>보험허가 등록 서비스</h1>
            <input name="ins_NM" onChange={onChange} value={id} placeholder="보험 ID를 입력하세요" type='number'/>
            <button onClick={()=>{
                setModal(!modal);
                onReset();
            }}>{btnTextChanger()}</button>
            {modal === true ? <InsuranceInfo id={id}/> : null}
            <div>
                <select name="permission" value={permission} onChange={onChangepermission}>
                    <option key="0" value="0">비허용</option>
                    <option key="1" value="1">허용</option>
                </select>
                <button onClick={()=>{
                    setModalpermit(!modalpermit);
                    console.log(inputs);
                }}>{btn2TextChanger()}</button>
                {modalpermit === true ? <InsurancePermissionInfo inputs={inputs}/> : null}
            </div>
            <Link to="/insurance">
                <button>보험관리서비스 홈으로</button>
            </Link>
        </div>
    );
}

export default InsurancePermissionService;