import React, {useEffect, useState} from "react";
import axios from "axios";

function ContractorInfoDeletion({id}) {
    const [contractors, setContractors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchCont = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setContractors(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.delete(
                    `http://localhost:8080/contractor/continfo/deletion/${id}`
                );
                console.log(response.data);
                console.log(contractors);
                setContractors(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchCont();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!contractors) return null;
    console.log(contractors);
    return (<div>deletion success!</div>);
}

export default ContractorInfoDeletion;