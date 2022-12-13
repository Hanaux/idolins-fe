import React, { useState, useEffect } from 'react';
import axios from 'axios';

// function ContractorInfoEnroll ({inputs}) {
function ContractorInfoEnroll ({contStart, contFin, custID, insID, installment, isPayment, payDay, installmentMonth, lastMonth, effective, installmentStart}) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [errMsg, setErrMsg] = useState(null);
    const [connectTimer, setConnectTimer] = useState(0);

    // const customAxiosInstance = () => {
    //     const axiosInstance = axios.create();
    //     const onFulfilled = (response) =>  response;
    //     const retry = (errorConfig) => {
    //         return new Promise((resolve)=>{
    //             setTimeout(()=>{
    //                 console.log('retry');
    //                 resolve(axiosInstance.request(errorConfig));
    //             }, 5000);
    //         });
    //     }
    //     const onRejected = (error) => {
    //         if(error.config){
    //             return retry(error.config);
    //         }
    //         return Promise.reject(error);
    //     };
    //     axiosInstance.interceptors.response.use(
    //         onFulfilled,
    //         onRejected
    //     );
    //     return axiosInstance;
    // };

    
    useEffect(() => {
        const postCont = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);

                const timer = setInterval(()=>{
                    setConnectTimer(connectTimer => connectTimer+1);
                }, 1000);
                // const apiRequest = customAxiosInstance();
                const response = await axios.post(
                    'http://localhost:8080/contractor/continfo/enrollment', {
                        cont_Fin: contFin,
                        cont_Start: contStart, 
                        cust_ID: custID,
                        ins_ID: insID,
                        installment: installment,
                        _Payment: isPayment,
                        payDay: payDay,
                        installmentMonth: installmentMonth,
                        lastMonth: lastMonth,
                        effective: effective,
                        installmentStart: installmentStart
                });
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

        postCont();
    }, []);

    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // return (
    //     <p>등록이 완료되었습니다</p>
    // );

    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // return <div>고객정보 등록이 완료되었습니다.</div>
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
    return <div>계약정보 등록이 완료되었습니다.<br/>추가 등록을 원하시면 초기화 버튼을 눌러주세요</div>
}


export default ContractorInfoEnroll;