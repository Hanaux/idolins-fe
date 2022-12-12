import React, { useState, useEffect } from 'react';
import axios from 'axios';

// function ContractorInfoEnroll ({inputs}) {
function ContractorInfoEnroll ({contStart, contFin, custID, insID, installment, isPayment, payDay, installmentMonth, lastMonth, effective, installmentStart}) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const customAxiosInstance = () => {
        const axiosInstance = axios.create();
        const onFulfilled = (response) =>  response;
        const retry = (errorConfig) => {
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    console.log('retry');
                    resolve(axiosInstance.request(errorConfig));
                }, 5000);
            });
        }
        const onRejected = (error) => {
            if(error.config){
                return retry(error.config);
            }
            return Promise.reject(error);
        };
        axiosInstance.interceptors.response.use(
            onFulfilled,
            onRejected
        );
        return axiosInstance;
    };

    
    useEffect(() => {
        const postCont = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const apiRequest = customAxiosInstance();
                const response = await apiRequest.post(
                    'http://localhost:8080/contractor/continfo/enrollment', {
                        contFin: contFin,
                        contStart: contStart, 
                        custID: custID,
                        insID: insID,
                        installment: installment,
                        isPayment: isPayment,
                        payDay: payDay,
                        installmentMonth: installmentMonth,
                        lastMonth: lastMonth,
                        effective: effective,
                        installmentStart: installmentStart
                });
                console.log(response.status);
            } catch (e) {
                console.log("error");
                setError(e);
            }
            setLoading(false);

        };

        postCont();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    return (
        <p>등록이 완료되었습니다</p>
    );
}

export default ContractorInfoEnroll;