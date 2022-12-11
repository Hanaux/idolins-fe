import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import CustomerInfo from "../CustomerSearch/CustomerInfo";
import CustomerInfoUpdate from "./CustomerInfoUpdate";

function CustomerUpdateService(){
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    let [modal, setModal] = useState(false);
    const [btnDisable, setBtnDisable] = useState(true);

    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    function btnTextChanger(){
        if (modal) {
            return "초기화";
        }
        else return "수정";
    }
    const onReset=()=>{
        if (modal) {
            setId('');
            setName('');
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
                       placeholder="고객 ID를 입력하세요" type='number'/>
                <input onChange={onChangeName} value={name} className="inputStyle"
                       placeholder="수정할 고객 이름를 입력하세요" type='text'/>
                <Button variant="search" className="SearchBtn" disabled={btnDisable}
                        onClick={()=>{
                            setModal(!modal);
                            onReset();
                        }}
                >{btnTextChanger()}</Button>
            </div>
            {modal === true ? <CustomerInfoUpdate id={id} name={name}/> : null}
        </div>
    );
}

export default CustomerUpdateService;