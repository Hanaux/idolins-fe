import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaycheckInfoEnroll ({payID, paymentReportOK, paymentCompleted}) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [connectTimer, setConnectTimer] = useState(0);

    useEffect(() => {
        const fetchPaycheck = async () => {
            try {
                setError(null);
                setLoading(true);

                const timer = setInterval(()=>{
                    setConnectTimer(connectTimer => connectTimer+1);
                }, 1000);

                const response = await axios.post(
                    `http://52.78.47.54:8080/Paycheck/paycheckinfo/enrollment`, {
                        payID : payID,
                        paymentReportOK : paymentReportOK,
                        paymentCompleted : paymentCompleted
                    }
                );
                console.log(response.status);
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

        fetchPaycheck();
    }, []);

    if (loading)
        if(connectTimer<5){
            return <div>로딩중..</div>;
        }else return <div className="ErrStatus">현재 시스템의 장애가 발생하여 해당 화면을 출력할 수 없습니다. <br/> 잠시후에 다시 시도해주세요</div>

    if (error !== null && error.data !==null){
        return ( <div>
            <div className="ErrStatus">{errMsg}</div>
            <div>해당정보에 일치하는 정보가 없습니다.</div>
        </div>);
        ;
    }

    return <div>보험급 지급 등록이 완료되었습니다.<br/>추가 등록을 원하시면 초기화 버튼을 눌러주세요</div>
}

export default PaycheckInfoEnroll;