import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChargerInfo({id}) {
    const [charger, setCharger] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchCharger = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setCharger(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    `http://localhost:8080/Charger/chargerinfo/${id}`
                );
                console.log(response.data);
                console.log(charger);
                setCharger(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchCharger();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!charger) return null;
    console.log(charger);
    return (

        <table>
            <tbody>
                <tr>
                    <td> 고객 ID </td>
                    <td>{charger.custID}</td>
                </tr>
                <tr>
                    <td> 보험 ID </td>
                    <td>{charger.ins_ID}</td>
                </tr>
                <tr>
                    <td> 대인 청구 금액 </td>
                    <td>{charger.lossAmountHuman}</td>
                </tr>
                <tr>
                    <td> 대물 청구 금액 </td>
                    <td>{charger.lossAmountProperty}</td>
                </tr>

            </tbody>

        </table>
    );
}

export default ChargerInfo;