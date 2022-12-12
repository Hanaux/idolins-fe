import React, {useEffect, useState} from "react";
import InsuranceInfo from "../InsuranceSearch/InsuranceInfo";
import InsurancePermissionInfo from "./InsurancePermissionInfo";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import CustomerInfoUpdate from "../../Customer/CustomerUpdate/CustomerInfoUpdate";

function InsurancePermissionService(){
    const [id, setId] = useState('');
    let [modal, setModal] = useState(false);
    let [modalpermit, setModalpermit] = useState(false);
    const [btnDisable, setBtnDisable] = useState(true);
    const [inputs, setInputs] = useState({
        permission : '0'
    })

    const [permission, setPermit] = useState('0');

    const onChangePermission = (e) => {
        setPermit(e.target.value);
    }

    const onChangeId = (e) => {
        setId(e.target.value);
    }
    function btnTextChanger(){
        if (modal) {
            return "초기화";
        }
        else return "변경";
    }
    const onReset=()=>{
        if (modal) {
            setId('');

        }
    }

    useEffect(()=>{
        if(id>0) setBtnDisable(false)
        else setBtnDisable(true)
    },[id]);

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
                <input onChange={onChangeId} value={id} className="inputStyle"
                       placeholder="보험 ID를 입력하세요" type='number'/>
                <input onChange={onChangePermission} value={permission} className="inputStyle"
                       placeholder="보험 허용을 변경하세요" type='text'/>
                <Button variant="search" className="SearchBtn" disabled={btnDisable}
                        onClick={()=>{
                            setModal(!modal);
                            onReset();
                        }}
                >{btnTextChanger()}</Button>
            </div>
            {modal === true ? <InsurancePermissionInfo id={id} permission={permission}/> : null}
        </div>

    );
}

export default InsurancePermissionService;