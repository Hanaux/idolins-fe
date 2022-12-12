import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Table} from "react-bootstrap";

function PaymentInfo({id}) {
    const [payment, setPayment] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [connectTimer, setConnectTimer] = useState(0);

    useEffect(() => {
        const fetchPayment = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setPayment(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);

                const timer = setInterval(()=>{
                    setConnectTimer(connectTimer => connectTimer+1);
                }, 1000);

                const response = await axios.get(
                    `http://localhost:8080/Payment/paymentinfo/${id}`
                );
                console.log(response);
                setPayment(response.data); // 데이터는 response.data 안에 들어있습니다.
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

        fetchPayment();
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

    if (!payment) return null;
    console.log(payment);
    return (

        <Table bordered hover className="TableStyleSearch">
            <tbody>
                <tr>
                    <td> 산출 ID </td>
                    <td>{payment.docID}</td>
                </tr>
                <tr>
                    <td> 날짜 </td>
                    <td>{payment.date}</td>
                </tr>
                <tr>
                    <td> 사고번호 </td>
                    <td>{payment.accNum}</td>
                </tr>
                <tr>
                    <td> 청구번호 </td>
                    <td>{payment.chargerNum}</td>
                </tr>
                <tr>
                    <td> 고객 ID </td>
                    <td>{payment.custID}</td>
                </tr>
            </tbody>

        </Table>
    );
}

export default PaymentInfo;