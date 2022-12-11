import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InsurancePermissionInfo({inputs}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchIns = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                console.log(inputs);
                const response = await axios.put(
                    `http://localhost:8080/insurance/insinfo/permission`,
                    inputs
                );
                console.log(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchIns();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    return (
        <p>허용변경이 완료되었습니다</p>
    );
}

export default InsurancePermissionInfo;