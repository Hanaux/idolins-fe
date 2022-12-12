import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InsurancePermissionInfo({id, permission}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [connectTimer, setConnectTimer] = useState(0);

    const timer = setInterval(()=>{
        setConnectTimer(connectTimer => connectTimer+1);
    }, 1000);

    useEffect(() => {
        const fetchIns = async () => {
            try {
                setError(null);
                setLoading(true);
                const response = await axios.put(
                    `http://52.78.47.54:8080/insurance/insinfo/permission`,
                    {
                        ins_ID: id,
                        permission: permission,
                    }
                );
                console.log(response.data);
            } catch (e) {
                setError(e);
                setErrMsg(
                    "ERR_CODE : " + e.response.data.code+ "\n"+
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
            <div>해당정보에 일치하는 보험의 정보가 없습니다.</div>
        </div>);
        ;
    }

    return (
        <p>허용변경이 완료되었습니다</p>
    );
}

export default InsurancePermissionInfo;