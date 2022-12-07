import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerInfo({id}) {
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
                const response = await axios.get(
                    `http://localhost:8080/customer/custinfo/${id}`
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
    return (

        <table>
            <tbody>
            <tr>
                <td>고객이름 : </td>
                <td>{users.cust_NM}</td>
            </tr>
            <tr>
                <td>전화번호 : </td>
                <td>{users.cust_PN}</td>
            </tr>
            <tr>
                <td>주민등록번호 : </td>
                <td>{users.ssn}</td>
            </tr>
            <tr>
                <td>계좌번호 : </td>
                <td>{users.acc_NM}</td>
            </tr>
            <tr>
                <td>고객성별 : </td>
                <td>{users.sex}</td>
            </tr>
            </tbody>

        </table>
    );
}

export default CustomerInfo;