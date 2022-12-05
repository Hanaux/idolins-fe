import React, {useState} from "react";
import Users from "./Users";

function CustomerSearchService(){
    const [id, setId] = useState('');
    let [modal, setModal] = useState(false);
    // const [btnTxt, setBtnTxt] = useState("조회");

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
            {modal === true ? <Users id={id}/> : null}
        </div>


    );
}

export default CustomerSearchService;