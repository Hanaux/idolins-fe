import React, {useEffect, useState} from "react";
import ChargerInfo from "../ChargerSearch/ChargerInfo";
import {Link} from "react-router-dom";
import ChargerInfodelete from "./ChargerInfodelete";
import {Button} from "react-bootstrap";

function ChargerDeleteService(){
    const [id, setId] = useState('');
    let [modal, setModal] = useState(false);
    const [btnDisable, setBtnDisable] = useState(true);

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
    useEffect(()=>{
        if(id>0) setBtnDisable(false)
        else setBtnDisable(true)
    },[id]);


    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex", justifyContent:"center"}}>
                <input onChange={onChange} value={id} className="inputStyle"
                       placeholder="삭제할 청구 ID를 입력하세요" type='number'/>
                <Button  variant="search" className="SearchBtn" disabled={btnDisable}
                         onClick={()=>{
                             setModal(!modal);
                             onReset();
                         }}>{btnTextChanger()}</Button>
            </div>
            {modal === true ? <ChargerInfodelete id={id}/> : null}
        </div>
    );
}

export default ChargerDeleteService;