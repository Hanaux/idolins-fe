import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UnderWrite({ id, jobInfo }) {
    const [ratio, setRatio] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchRatio = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setRatio(0);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    `http://localhost:8080/contractor/continfo/${id}/uw`, 
                    {id, jobInfo}
                );
                console.log(response.data);
                console.log(ratio);
                setRatio(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchRatio();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!ratio) return null;
    console.log(ratio);
    return (
        <table>
            <tbody>
                <tr>
                    <td> 요율 </td>
                    <td>{ratio}</td>
                </tr>
            </tbody>

        </table>
    );
}

export default UnderWrite;