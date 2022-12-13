import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContractorInfoModify({cont_ID_, cont_Start_, cont_Fin_, cust_ID_, ins_ID_, installment_, _Payment_, payDay_, installmentMonth_, lastMonth_, effective_, installmentStart_}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [errMsg, setErrMsg] = useState(null);
    const [connectTimer, setConnectTimer] = useState(0);

    const [cont, setCont] = useState(null);

    useEffect(() => {
        const fetchCont = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setCont(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);

                const timer = setInterval(()=>{
                    setConnectTimer(connectTimer => connectTimer+1);
                }, 1000);

                const cont = await axios.put(
                    'http://localhost:8080/contractor/continfo/modification', {
                        cont_ID: cont_ID_,
                        cont_Fin: cont_Fin_,
                        cont_Start: cont_Start_, 
                        cust_ID: cust_ID_,
                        ins_ID: ins_ID_,
                        installment: installment_,
                        _Payment: _Payment_,
                        payDay: payDay_,
                        installmentMonth: installmentMonth_,
                        lastMonth: lastMonth_,
                        effective: effective_,
                        installmentStart: installmentStart_
                });
                console.log(cont);
                setCont(cont.data); // 데이터는 response.data 안에 들어있습니다.
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

        fetchCont();
    }, []);

    
    if (loading)
        if(connectTimer<5){
            return <div>로딩중..</div>;
        }else return <div className="ErrStatus">현재 시스템의 장애가 발생하여 해당 화면을 출력할 수 없습니다. <br/> 잠시후에 다시 시도해주세요</div>

    if (error !== null && error.data !==null){
        return ( <div>
            <div className="ErrStatus">{errMsg}</div>
            {/* <div>해당정보에 일치하는 계약정보가 없습니다.</div> */}
        </div>);
        ;
    }
    return <div>계약정보 수정이 완료되었습니다.</div>
}

export default ContractorInfoModify;