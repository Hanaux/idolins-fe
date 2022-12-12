import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Table} from "react-bootstrap";

function ChargerInfo({id}) {
    const [charger, setCharger] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [connectTimer, setConnectTimer] = useState(0);

    useEffect(() => {
        const fetchCharger = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setCharger(null);
                setLoading(true);

                const timer = setInterval(()=>{
                    setConnectTimer(connectTimer => connectTimer+1);
                }, 1000);

                const response = await axios.get(
                    `http://localhost:8080/Charger/chargerinfo/${id}`
                );
                console.log(response.data);
                setCharger(response.data); // 데이터는 response.data 안에 들어있습니다.
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

        fetchCharger();
    }, []);

    if (loading)
        if(connectTimer<5){
            return <div>로딩중..</div>;
        }else return <div className="ErrStatus">현재 시스템의 장애가 발생하여 해당 화면을 출력할 수 없습니다. <br/> 잠시후에 다시 시도해주세요</div>

    if (error !== null && error.data !==null){
        return ( <div>
            <div className="ErrStatus">{errMsg}</div>
            <div>해당정보에 일치하는 청구정보가 없습니다.</div>
        </div>);
        ;
    }

    if (!charger) return null;
    return (

        <Table bordered hover className="TableStyleSearch">
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

        </Table>
    );
}

export default ChargerInfo;