import React, {useEffect, useState} from "react";
import axios from "axios";

function CustomerInfoDeletion({id}) {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setUsers(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.delete(
                    `http://localhost:8080/customer/custinfo/deletion/${id}`
                );
                console.log(response.data);
                console.log(users);
                setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    console.log(users);
    return (<div>deletion success!</div>);
}

export default CustomerInfoDeletion;