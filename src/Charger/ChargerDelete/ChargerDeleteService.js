import React, {useState} from "react";
import ChargerInfo from "../ChargerSearch/ChargerInfo";
import {Link} from "react-router-dom";
import ChargerInfodelete from "./ChargerInfodelete";

function ChargerDeleteService(){
    const [id, setId] = useState('');
    let [modal, setModal] = useState(false);
    let [modaldelete, setModaldelete] = useState(false);

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
            <h1>청구정보 삭제서비스</h1>
            <input onChange={onChange} value={id} placeholder="청구번호를 입력하세요" type='number'/>
            <button onClick={()=>{
                setModal(!modal);
                onReset();
            }}>{btnTextChanger()}</button>
            {modal === true ? <ChargerInfo id={id}/> : null}
            <button onClick={()=>{
                setModaldelete(!modaldelete);
            }}>삭제</button>
            {modaldelete === true ? <ChargerInfodelete id={id}/> : null}
            <Link to="/charger">
                <button>보험관리서비스 홈으로</button>
            </Link>
        </div>
    );
}

export default ChargerDeleteService;