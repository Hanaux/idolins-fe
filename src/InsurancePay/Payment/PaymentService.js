import React, {useState} from "react";
import {Link} from "react-router-dom";
import PaymentInfoEnroll from "./PaymentInfoEnroll";
import CalculationInfo from "../Calculation/CalculationInfo";

function PaymentService() {

    const [id, setId] = useState('');

    let [modal, setModal] = useState(false);
    const [inputs, setInputs] = useState({
        docID : '',
        date  : '',
        accNum : '',
        chargerNum  : '',
        custID  : '',
    });

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    function btnTextChanger(){
        if (modal) {
            return "초기화";
        }
        else return "조회";
    }

    const onChange =(e) => {
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const onReset =()=> {
        setInputs({
            docID : '',
            date  : '',
            accNum : '',
            chargerNum  : '',
            custID  : '',
        })
    }

    const {date, accNum, chargerNum, custID, docID} = inputs;

    return(
        <div>
            <h1>지급 품의서</h1>
            {/*산출 조회 화면 출력(docid 입력)*/}
            <div>
                <h4>산출내역 조회</h4>
                <input onChange={onChangeId} value={id} placeholder="산출 번호를 입력하세요" type='number'/>
                <button onClick={()=>{
                    setModal(!modal);
                    onReset();
                }}>{btnTextChanger()}</button>
                {modal === true ? <CalculationInfo id={id}/> : null}
            </div>
            <div>
            {/*지급 품의서를 품의일자, 사구접수번호, 지급액, 지급대상자 입력*/}
                <h4> 지급 품의서 저장</h4>
                <input name="docID" placeholder="산출 ID" onChange={onChange} value={docID}/>
                <input name="date" placeholder="날짜" onChange={onChange} value={accNum}/>
                <input name="accNum" placeholder="사고번호" onChange={onChange} value={accNum}/>
                <input name="chargerNum" placeholder="청구번호" onChange={onChange} value={chargerNum}/>
                <input name="custID" placeholder="고객 ID" onChange={onChange} value={custID}/>
            </div>
            <div>
                <button onClick={onReset}>초기화</button>
                <button onClick={()=>{
                    setModal(!modal);
                    // onEnroll();
                }}>등록</button>
                {modal === true ? <PaymentInfoEnroll inputs = {inputs} /> : null}
            </div>
            {/*결재조회버튼 클릭*/}
            {/*결재조회화면 출력*/}

            <Link to="/pay">
                <button>홈으로 가기</button>
            </Link>
        </div>
    );
}

export default PaymentService;