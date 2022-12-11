import React, {useEffect, useState} from "react";
import axios, {post} from 'axios';

function CustomerInfoEnroll({cust_NM, ssn, cust_PN, sex, acc_NM}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const postUsers = async () => {
            try{
                setError(null);
                setLoading(true);
                const response = await axios.post('http://localhost:8080/customer/custinfo/enrollment', {
                    acc_NM: acc_NM,
                        sex: sex,
                        ssn: ssn,
                        cust_NM: cust_NM,
                        cust_PN: cust_PN
                });
                console.log(response);
            }catch(e){
                setError(e);
            }
            setLoading(false);
        };
        postUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    return <div>고객정보 등록이 완료되었습니다.</div>
}

export default CustomerInfoEnroll;