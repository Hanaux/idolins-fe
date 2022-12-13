import React, { useState, useEffect } from 'react';
import ContractorInfoModify from './ContractorInfoModify';
import axios from 'axios';

function ContractorInfoInput({cont_ID_, cont_Start_, cont_Fin_, cust_ID_, ins_ID_, installment_, _Payment_, payDay_, installmentMonth_, lastMonth_, effective_, installmentStart_}) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [errMsg, setErrMsg] = useState(null);
    const [connectTimer, setConnectTimer] = useState(0);

    const [cont, setCont] = useState(null);

    const [inputs, setInputs] = useState({
        contFin : '',
        contStart : '',
        custID : '',
        insID : '',
        payDay : '',
        installmentMonth : '',
        lastMonth : '',
        installmentStart : ''
    });
    const {contFin, contStart, custID, insID, payDay, installmentMonth, lastMonth, installmentStart} = inputs;
    
    const [bInputs, setBInputs] = useState({
        installment : installment_,
        isPayment : _Payment_,
        effective : effective_
    });
    const {installment, isPayment, effective} = bInputs;

    const [data, setData] = useState({
        _contFin : cont_Fin_,
        _contStart : cont_Start_,
        _custID : cust_ID_,
        _insID : ins_ID_,
        _payDay : payDay_,
        _installmentMonth : installmentMonth_,
        _lastMonth : lastMonth_,
        _installmentStart : installmentStart_
    });
    const {_contFin, _contStart, _custID, _insID, _payDay, _installmentMonth, _lastMonth, _installmentStart} = data;

    const [bData, setBData] = useState({
        installment : installment_,
        isPayment : _Payment_,
        effective : effective_
    });
    const {_installment, _isPayment, _effective} = bData;

    const onChangeSelected =(e) =>{
        setBInputs(e.target.value);
    };
    const onChange = (e) => {
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    };

    const [doModify, setDoModify] = useState(false);

    const onDoModify = (e) => {
        setDoModify(!doModify);
        if(doModify == true) {
            if(contStart != null) setData({_contStart : contStart});
            // if(contStart == null) contStart = cont_Start_;
            if(contFin != null) setData({_contFin : contFin});
            if(custID != null) setData({_custID : custID});
            if(insID != null) setData({_insID : insID});
            if(payDay != null) setData({_payDay : payDay});
            if(installmentMonth == null) setData({_installmentMonth : installmentMonth});
            if(lastMonth != null) setData({_lastMonth : lastMonth});
            if(installmentStart != null) setData({_installmentStart : installmentStart});
        }
    }

    // useEffect(() => {
    //     const fetchCont = async () => {
    //         try {
    //             // 요청이 시작 할 때에는 error 와 users 를 초기화하고
    //             setError(null);
    //             setCont(null);
    //             // loading 상태를 true 로 바꿉니다.
    //             setLoading(true);

    //             const timer = setInterval(()=>{
    //                 setConnectTimer(connectTimer => connectTimer+1);
    //             }, 1000);
                
    //             if(contStart == null) contStart = cont_Start_;
    //             if(contFin == null) contFin = cont_Fin_;
    //             if(custID == null) custID = cust_ID_;
    //             if(insID == null) insID = ins_ID_;
    //             if(payDay == null) payDay = payDay_;
    //             if(installmentMonth == null) installmentMonth = installmentMonth_;
    //             if(lastMonth == null) lastMonth = lastMonth_;
    //             if(installmentStart == null) installmentStart = installmentStart_;

    //             const cont = await axios.put(
    //                 'http://localhost:8080/contractor/continfo/modification', {
    //                     cont_ID: cont_ID_,
    //                     cont_Fin: contFin,
    //                     cont_Start: contStart, 
    //                     cust_ID: custID,
    //                     ins_ID: insID,
    //                     installment: installment,
    //                     _Payment: isPayment,
    //                     payDay: payDay,
    //                     installmentMonth: installmentMonth,
    //                     lastMonth: lastMonth,
    //                     effective: effective,
    //                     installmentStart: installmentStart
    //             });
    //             console.log(cont);
    //             setCont(cont.data); // 데이터는 response.data 안에 들어있습니다.
    //         } catch (e) {
    //             console.log(e.response.data);
    //             setError(e);
    //             setErrMsg("ERR_CODE : " + e.response.data.code+ "\n"+
    //                             "ERR_MESSAGE : " + e.response.data.message + "\n"+
    //                             "ERR_STATUS : " + e.response.data.status+"\n" +
    //                             "ERR_OCCUR : " + e.response.data.timestamp + "\n"
    //             );
    //         }
    //         setLoading(false);
    //     };

    //     fetchCont();
    // }, []);


    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input name="contStart" placeholder="계약 시작일" onChange={onChange} value={contStart}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input name="contFin" placeholder="계약 만료일" onChange={onChange} value={contFin}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input name="custID" placeholder="고객 ID" onChange={onChange} value={custID}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input name="insID" placeholder="보험 ID" onChange={onChange} value={insID}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select value={installment} onChange={onChangeSelected}>
                                <option key="installment" value="true">분할납부</option>
                                <option key="lumpSum" value="false">일시불</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select value={isPayment} onChange={onChangeSelected}>
                                <option key="payed" value="true">납부</option>
                                <option key="notPayed" value="false">불납</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input name="payDay" placeholder="납부일" onChange={onChange} value={payDay}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input name="installmentMonth" placeholder="분할 납부 개월 수" onChange={onChange} value={installmentMonth}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input name="lastMonth" placeholder="남은 개월 수" onChange={onChange} value={lastMonth}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select value={effective} onChange={onChangeSelected}>
                                <option key="effective" value="true">시행 중</option>
                                <option key="stop" value="false">정지</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input name="installmentStart" placeholder="분납 시작일" onChange={onChange} value={installmentStart}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={onDoModify}>수정</button>
            <p>{_contStart}</p>
            {/* {doModify == true ? <ContractorInfoModify cont_ID_={cont_ID_} cont_Start_={_contStart} cont_Fin_={_contFin} cust_ID_={_custID} ins_ID_={_insID} installment_={_installment}
                _Payment_={_isPayment} payDay_={_payDay} installmentMonth_={_installmentMonth} lastMonth_={_lastMonth} effective_={_effective} installmentStart_={_installmentStart}/> : null} */}
        </div>
    );
}

export default ContractorInfoInput;