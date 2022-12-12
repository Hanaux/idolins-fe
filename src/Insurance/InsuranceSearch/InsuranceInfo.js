import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Table} from "react-bootstrap";

function InsuranceInfo({id}) {
    const [ins, setIns] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [connectTimer, setConnectTimer] = useState(0);
    useEffect(() => {
        const fetchIns = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setIns(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);

                const timer = setInterval(()=>{
                    setConnectTimer(connectTimer => connectTimer+1);
                }, 1000);

                const insurance = await axios.get(
                    `http://localhost:8080/insurance/insinfo/${id}`
                );
                console.log(insurance);
                setIns(insurance.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                console.log(e.response.data);
                setError(e);
                setErrMsg("ERR_CODE : " + e.response.data.code+ "\n"+
                    "ERR_MESSAGE : " + e.response.data.message + "\n"+
                    "ERR_STATUS : " + e.response.data.status+"\n" +
                    "ERR_OCCUR : " + e.response.data.timestamp + "\n"
                );
            }
            setLoading(false);
        };

        fetchIns();
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

    if (!ins) return null;

    return (

        <Table bordered hover className="TableStyleSearch">
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

        </Table>
    );
}

export default InsuranceInfo;