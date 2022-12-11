import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CalculationInfo({id}) {
    const [calculation, setCalculation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchCalculation = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setCalculation(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    `http://localhost:8080/Calculation/calculationinfo/${id}`
                );
                console.log(response.data);
                console.log(calculation);
                setCalculation(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchCalculation();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!calculation) return null;
    console.log(calculation);
    return (

        <table>
            <tbody>
                <tr>
                    <td> 사고 번호 </td>
                    <td>{calculation.custID}</td>
                </tr>
                <tr>
                    <td> 대인 보험 결정 비용 </td>
                    <td>{calculation.decisionCompensationProperty}</td>
                </tr>
                <tr>
                    <td> 대물 보험 결정 비용 </td>
                    <td>{calculation.decisionCompensationHuman}</td>
                </tr>
            </tbody>

        </table>
    );
}

export default CalculationInfo;