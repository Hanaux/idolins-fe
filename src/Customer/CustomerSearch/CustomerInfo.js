import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Table} from "react-bootstrap";

function CustomerInfo({id}) {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [connectTimer, setConnectTimer] = useState(0);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setUsers(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);

                const timer = setInterval(()=>{
                    setConnectTimer(connectTimer => connectTimer+1);
                }, 1000);

                const cust = await axios.get(
                    `http://localhost:8080/customer/custinfo/${id}`
                );
                console.log(cust);
                setUsers(cust.data); // 데이터는 response.data 안에 들어있습니다.
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

        fetchUsers();
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
    if (!users) return null;
    return (

        <Table bordered hover className="TableStyleSearch">
            <tbody>
            <tr>
                <td>고객이름</td>
                <td>{users.cust_NM}</td>
            </tr>
            <tr>
                <td>전화번호</td>
                <td>{users.cust_PN.slice(0,3)}-{users.cust_PN.slice(3,7)}
                -{users.cust_PN.slice(7,11)}</td>
            </tr>
            <tr>
                <td>주민등록번호</td>
                <td>{users.ssn.slice(0,6)}-{users.ssn.slice(6,13)}</td>
            </tr>
            <tr>
                <td>계좌번호</td>
                <td>{users.acc_NM}</td>
            </tr>
            <tr>
                <td>고객성별</td>
                <td>{users.sex}</td>
            </tr>
            </tbody>

        </Table>
    );
}

export default CustomerInfo;