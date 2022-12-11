import React, {useState} from "react";
import {Link} from "react-router-dom";
import PaymentInfo from "../Payment/PaymentInfo";
import PaycheckInfoEnroll from "./PaycheckInfoEnroll";

function PaycheckService() {
    const [inputs, setInputs] = useState({
        payID : '',
        paymentReportOK : '',
        paymentCompleted : ''
    });

    const [id, setId] = useState('');
    let [modal, setModal] = useState(false);
    const {payID, paymentReportOK, paymentCompleted} = inputs;

    const onChangeId = (e) => {
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

    const onChange =(e) => {
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
        console.log(inputs);
    }

    const onResetPay =()=> {
        setInputs({
            payID : '',
            paymentReportOK : '',
            paymentCompleted : ''
        })
    }

    return(
        <div>
            <h1>보험급지급</h1>
            {/*Calculation 조회*/}
            <div>
                <h4>지급품의서 조회</h4>
                <input onChange={onChangeId} value={id} placeholder="지급품의서 번호를 입력하세요" type='number'/>
                <button onClick={()=>{
                    setModal(!modal);
                    onReset();
                }}>{btnTextChanger()}</button>
                {modal === true ? <PaymentInfo id={id}/> : null}
            </div>
            {/*문서번호, 사고 접수번호, 지급액, 결재 결과, 지급처리 버튼 출력*/}
            <div>
                <h4>보험급지급</h4>
                <input name="payID" placeholder="지급품의서 번호" onChange={onChange} value={payID}/>
                <input name="paymentReportOK" placeholder="보험지급레포트확인" onChange={onChange} value={paymentReportOK}/>
                <input name="paymentCompleted" placeholder="보험지급완료여부" onChange={onChange} value={paymentCompleted}/>
            </div>
            <div>
                <p>저장될 최종 품의지급서입니다.</p>
                <table>
                    <tbody>
                    <tr>
                        <td> 지급품의서 번호 </td>
                        <td>{payID}</td>
                    </tr>
                    <tr>
                        <td> 보험지급레포트확인 </td>
                        <td>{paymentReportOK}</td>
                    </tr>
                    <tr>
                        <td> 보험지급완료여부 </td>
                        <td>{paymentCompleted}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={onResetPay}>초기화</button>
                <button onClick={()=>{
                    setModal(!modal);
                }}>등록</button>
                {modal === true ? <PaycheckInfoEnroll inputs = {inputs} /> : null}
            </div>
            {/*지급처리버튼 클릭*/}
            {/*확인 버튼 클릭*/}

            <Link to="/pay">
                <button>홈으로 가기</button>
            </Link>
        </div>
    );
}

export default PaycheckService;