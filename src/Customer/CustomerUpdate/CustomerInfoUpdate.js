import React, {useEffect, useState} from "react";
import axios from "axios";

function CustomerInfoUpdate({id, name}){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [connectTimer, setConnectTimer] = useState(0);


    const timer = setInterval(()=>{
        setConnectTimer(connectTimer => connectTimer+1);
    }, 1000);

    useEffect(()=>{
        const putUsers = async () => {
            try{
                setError(null);
                setLoading(true);
                const response = await axios.put('http://localhost:8080/customer/custinfo/modification', {
                    cust_ID: id,
                    cust_NM: name,
                });
                console.log(response);
            }catch(e){
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
        putUsers();
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
    return <div>해당고객의 정보가 수정되었습니다.</div>
}

export default CustomerInfoUpdate;