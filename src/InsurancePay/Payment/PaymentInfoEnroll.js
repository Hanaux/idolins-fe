import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaymentInfoEnroll ({inputs}) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPayment = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                console.log(inputs);
                const response = await axios.post(
                    `http://localhost:8080/Payment/paymentinfo/enrollment`,
                    inputs
                );
                console.log(response.status);
            } catch (e) {
                setError(e);
            }
            setLoading(false);

        };

        fetchPayment();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    return (
        <p>지급품의서 입력이 완료되었습니다.</p>
    );
}

export default PaymentInfoEnroll;