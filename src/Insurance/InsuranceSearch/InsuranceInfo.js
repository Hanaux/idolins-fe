import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InsuranceInfo({id}) {
    const [ins, setIns] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchIns = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setIns(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    `http://localhost:8080/insurance/insinfo/${id}`
                );
                console.log(response.data);
                console.log(ins);
                setIns(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchIns();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!ins) return null;
    console.log(ins);
    return (

        <table>
            <tbody>
                <tr>
                    <td> 보험 이름 </td>
                    <td>{ins.ins_NM}</td>
                </tr>
                <tr>
                    <td> 보험 담당 부서 </td>
                    <td>{ins.department}</td>
                </tr>
                <tr>
                    <td> 보험 고객층 </td>
                    <td>{ins.target_Cust}</td>
                </tr>
                <tr>
                    <td> 보험 세부정보 </td>
                    <td>{ins.detail}</td>
                </tr>
                <tr>
                    <td> 보험료 </td>
                    <td>{ins.insFee}</td>
                </tr>
                <tr>
                    <td> 보험 비율 </td>
                    <td>{ins.rate}</td>
                </tr>
                <tr>
                    <td> 보험 보상 </td>
                    <td>{ins.compensation}</td>
                </tr>
                <tr>
                    <td> 보험 허용 </td>
                    <td>{ins.permission}</td>
                </tr>
            </tbody>

        </table>
    );
}

export default InsuranceInfo;