import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Table} from "react-bootstrap";

function CalculationInfo({id}) {
    const [calculation, setCalculation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [connectTimer, setConnectTimer] = useState(0);
    useEffect(() => {
        const fetchCalculation = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setCalculation(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const timer = setInterval(()=>{
                    setConnectTimer(connectTimer => connectTimer+1);
                }, 1000);

                const cal = await axios.get(
                    `http://localhost:8080/Calculation/calculationinfo/${id}`
                );
                console.log(cal);
                setCalculation(cal.data);
            } catch (e) {
                setError(e);
                setErrMsg("ERR_CODE : " + e.response.data.code+ "\n"+
                    "ERR_MESSAGE : " + e.response.data.message + "\n"+
                    "ERR_STATUS : " + e.response.data.status+"\n" +
                    "ERR_OCCUR : " + e.response.data.timestamp + "\n"
                );
            }
            setLoading(false);
        };

        fetchCalculation();
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

    if (!calculation) return null;
    return (
        <Table bordered hover className="TableStyleSearch">
            <tbody>
            <tr>
                <td>사고 번호</td>
                <td>{calculation.accident_NM}</td>
            </tr>
            <tr>
                <td>대인 보험 결정 비용</td>
                <td>{calculation.decisionCompensationProperty}</td>
            </tr>
            <tr>
                <td>대물 보험 결정 비용</td>
                <td>{calculation.decisionCompensationHuman}</td>
            </tr>
            </tbody>

        </Table>

    );
}

export default CalculationInfo;