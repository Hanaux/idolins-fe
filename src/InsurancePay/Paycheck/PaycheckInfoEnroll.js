import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaycheckInfoEnroll ({inputs}) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPaycheck = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                console.log(inputs);
                const response = await axios.post(
                    `http://localhost:8080/Paycheck/paycheckinfo/enrollment`,
                    inputs
                );
                console.log(response.status);
            } catch (e) {
                setError(e);
            }
            setLoading(false);

        };

        fetchPaycheck();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    return (
        <p>보험금 지급 정보 입력이 완료되었습니다.</p>
    );
}

export default PaycheckInfoEnroll;