import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaymentInfo({id}) {
    const [payment, setPayment] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPayment = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setPayment(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    `http://localhost:8080/Payment/paymentinfo/${id}`
                );
                console.log(response.data);
                console.log(payment);
                setPayment(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchPayment();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!payment) return null;
    console.log(payment);
    return (

        <table>
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

        </table>
    );
}

export default PaymentInfo;