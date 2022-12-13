import React, { useState, useEffect } from 'react';
import ContractorInfoInput from './ContractorInfoInput';
import axios from 'axios';

function ContractorInfoForModify({id}) {
    const [cont, setCont] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [connectTimer, setConnectTimer] = useState(0);
    useEffect(() => {
        const fetchCont = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setCont(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);

                const timer = setInterval(()=>{
                    setConnectTimer(connectTimer => connectTimer+1);
                }, 1000);

                const cont = await axios.get(
                    `http://localhost:8080/contractor/continfo/${id}`
                );
                console.log(cont);
                setCont(cont.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                console.log(e.response.data);
                setError(e);
                setErrMsg("ERR_CODE : " + e.response.data.code+ "\n"+
                                "ERR_MESSAGE : " + e.response.data.message + "\n"+
                                "ERR_STATUS : " + e.response.data.status+"\n" +
                                "ERR_OCCUR : " + e.response.data.timestamp + "\n"
                );
            }
            setLoading(false);
        };

        fetchCont();
    }, []);
    if (loading)
        if(connectTimer<5){
            return <div>로딩중..</div>;
        }else return <div className="ErrStatus">현재 시스템의 장애가 발생하여 해당 화면을 출력할 수 없습니다. <br/> 잠시후에 다시 시도해주세요</div>


    if (error !== null && error.data !==null){
        return ( <div>
                    <div className="ErrStatus">{errMsg}</div>
                    <div>해당정보에 일치하는 고객의 정보가 없습니다.</div>
                </div>);
           ;
    }
    if (!cont) return null;
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td> 계약 시작일 </td>
                        <td>{cont.cont_Start}</td>
                    </tr>
                    <tr>
                        <td> 계약 만료일 </td>
                        <td>{cont.cont_Fin}</td>
                    </tr>
                    <tr>
                        <td> 고객 ID </td>
                        <td>{cont.cust_ID}</td>
                    </tr>
                    <tr>
                        <td> 보험 ID </td>
                        <td>{cont.ins_ID}</td>
                    </tr>
                    <tr>
                        <td> 납부 방식 </td>
                        <td>{cont.installment == true ? <p>분할납부</p> : <p>일시불</p>}</td>
                    </tr>
                    <tr>
                        <td> 보험료 지불 여부 </td>
                        <td>{cont._Payment == true ? <p>납부</p> : <p>불납</p>}</td>
                    </tr>
                    <tr>
                        <td> 납부일 </td>
                        <td>{cont.payDay}</td>
                    </tr>
                    <tr>
                        <td> 분할 납부 개월 수 </td>
                        <td>{cont.installmentMonth}</td>
                    </tr>
                    <tr>
                        <td> 남은 개월 수 </td>
                        <td>{cont.lastMonth}</td>
                    </tr>
                    <tr>
                        <td> 시행 여부 </td>
                        <td>{cont.effective == true ? <p>시행 중</p> : <p>정지</p>}</td>
                    </tr>
                    <tr>
                        <td> 분납 시작일 </td>
                        <td>{cont.installmentStart}</td>
                    </tr>
                </tbody>
            </table>
            <ContractorInfoInput cont_ID_={id} cont_Start_={cont.cont_Start} cont_Fin_={cont.cont_Fin} cust_ID_={cont.cust_ID} ins_ID_={cont.ins_ID} installment_={cont.installment}
                _Payment_={cont._Payment} payDay_={cont.payDay} installmentMonth_={cont.installmentMonth} lastMonth_={cont.lastMonth} effective_={cont.effective} installmentStart_={cont.installmentStart}/>
        </div>
    );
}

export default ContractorInfoForModify;