import React, {useState} from "react";
import ContractorInfoEnroll from "./ContractorInfoEnroll";
import {Link} from "react-router-dom";

function ContractorEnrollService() {
    const [inputs, setInputs] = useState({
        contFin : '',
        contStart : '',
        custID : '',
        insID : '',
        // installment : '',
        // isPayment : '' ,
        payDay : '',
        installmentMonth : '',
        lastMonth : '',
        // effective : '',
        installmentStart : ''
    });

    const {contFin, contStart, custID, insID, payDay, installmentMonth, lastMonth, installmentStart} = inputs;

    const [bInputs, setBInputs] = useState({
        installment : false,
        isPayment : false,
        effective : false
    });

    const {installment, isPayment, effective} = bInputs;
    
    const onChangeSelected =(e) =>{
        setBInputs(e.target.value);
    };
    const onChange =(e) => {
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    };

    const onReset =()=> {
        setInputs({
            contFin : '',
            contStart : '',
            custID : '',
            insID : '',
            // installment : '',
            // isPayment : '' ,
            payDay : '',
            installmentMonth : '',
            lastMonth : '',
            // effective : '',
            installmentStart : ''
        })
        setBInputs({
            installment : false,
            isPayment : false,
            effective : false
        })
        setDoEnroll(false)
    }

    const [doEnroll, setDoEnroll] = useState(false);

    return (
        <div>
            <div>
                <input name="contStart" placeholder="계약 시작일" onChange={onChange} value={contStart}/>
                <input name="contFin" placeholder="계약 만료일" onChange={onChange} value={contFin}/>
                <input name="custID" placeholder="고객 ID" onChange={onChange} value={custID}/>
                <input name="insID" placeholder="보험 ID" onChange={onChange} value={insID}/>
                <select value={installment} onChange={onChangeSelected}>
                    <option key="installment" value="true">분할납부</option>
                    <option key="lumpSum" value="false">일시불</option>
                </select>
                <select value={isPayment} onChange={onChangeSelected}>
                    <option key="payed" value="true">납부</option>
                    <option key="notPayed" value="false">불납</option>
                </select>
                <input name="payDay" placeholder="납부일" onChange={onChange} value={payDay}/>
                <input name="installmentMonth" placeholder="분할 납부 개월 수" onChange={onChange} value={installmentMonth}/>
                <input name="lastMonth" placeholder="남은 개월 수" onChange={onChange} value={lastMonth}/>
                <select value={effective} onChange={onChangeSelected}>
                    <option key="effective" value="true">시행 중</option>
                    <option key="stop" value="false">정지</option>
                </select>
                <input name="installmentStart" placeholder="분납 시작일" onChange={onChange} value={installmentStart}/>
            </div>
            <div>
                <p>저장될 최종 계약정보입니다.</p>
                <table>
                    <tbody>
                    <tr>
                        <td> 계약 시작일 </td>
                        <td>{contStart}</td>
                    </tr>
                    <tr>
                        <td> 계약 만료일 </td>
                        <td>{contFin}</td>
                    </tr>
                    <tr>
                        <td> 고객 ID </td>
                        <td>{custID}</td>
                    </tr>
                    <tr>
                        <td> 보험 ID </td>
                        <td>{insID}</td>
                    </tr>
                    <tr>
                        <td> 납부 방식 </td>
                        <td>{installment == true ? <p>분할납부</p> : <p>일시불</p>}</td>
                    </tr>
                    <tr>
                        <td> 보험료 지불 여부 </td>
                        <td>{isPayment == true ? <p>납부</p> : <p>불납</p>}</td>
                    </tr>
                    <tr>
                        <td> 납부일 </td>
                        <td>{payDay}</td>
                    </tr>
                    <tr>
                        <td> 분할 납부 개월 수 </td>
                        <td>{installmentMonth}</td>
                    </tr>
                    <tr>
                        <td> 남은 개월 수 </td>
                        <td>{lastMonth}</td>
                    </tr>
                    <tr>
                        <td> 시행 여부 </td>
                        <td>{effective == true ? <p>시행 중</p> : <p>정지</p>}</td>
                    </tr>
                    <tr>
                        <td> 분납 시작일 </td>
                        <td>{installmentStart}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={onReset}>초기화</button>
                <button onClick={()=> setDoEnroll(!doEnroll)}>등록</button>
            </div>
            <div>
                {/* {doEnroll===true?<ContractorInfoEnroll inputs = {inputs}/>
                    :<p>Not Yet</p>} */}
                {doEnroll===true?<ContractorInfoEnroll 
                contStart={contStart} contFin={contFin} custID={custID} insID={insID} installment={installment}
                isPayment={isPayment} payDay={payDay} installmentMonth={installmentMonth} lastMonth={lastMonth} effective={effective} installmentStart={installmentStart}/>
                    :<p>Not Yet</p>}
            </div>
            <Link to="/contractor">
                <button>계약관리서비스 홈으로</button>
            </Link>
        </div>
    );
}
export default ContractorEnrollService;