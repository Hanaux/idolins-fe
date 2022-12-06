import React, {useState} from "react";

function CustomerEnrollService() {
    const [inputs, setInputs] = useState({
        cust_NM : '',
        ssn : '',
        cust_PN : '',
        acc_NM : ''
    });

    const {cust_NM, ssn, cust_PN, acc_NM} = inputs;
    const [sex, setSex] = useState('남성');
    const onChangeSelected =(e) =>{
        setSex(e.target.value);
    };
    const onChange =(e) => {
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const onReset =()=> {
        setInputs({
            cust_NM : '',
            ssn : '',
            cust_PN : '',
            acc_NM : ''
        })
        setSex('남성')

    }

    const blankCheck =()=>{
        if (!cust_NM && !ssn && !cust_PN && !acc_NM){

            return true;
        }
        else return false;
    }

    return (
        <div>
            <div>
                <input name="cust_NM" placeholder="고객 이름" onChange={onChange} value={cust_NM}/>
                <input name="ssn" placeholder="주민등록번호" onChange={onChange} value={ssn}/>
                <input name="cust_PN" placeholder="전화번호" onChange={onChange} value={cust_PN}/>
                <select value={sex} onChange={onChangeSelected}>
                    <option key="Male" value="남성">남성</option>
                    <option key="Female" value="여성">여성</option>
                    <option key="Other" value="기타">기타</option>
                </select>
                <input name="acc_NM" placeholder="계좌번호" onChange={onChange} value={acc_NM}/>
            </div>
            <div>
                <p>저장될 최종 고객정보입니다.</p>
                <table>
                    <tbody>
                        <tr>
                            <td>고객이름</td>
                            <td>{cust_NM}</td>
                        </tr>
                        <tr>
                            <td>주민등록번호</td>
                            <td>{ssn}</td>
                        </tr>
                        <tr>
                            <td>전화번호</td>
                            <td>{cust_PN}</td>
                        </tr>
                        <tr>
                            <td>성별</td>
                            <td>{sex}</td>
                        </tr>
                        <tr>
                            <td>계좌번호</td>
                            <td>{acc_NM}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={onReset}>초기화</button>
                <button>등록</button>
            </div>
        </div>
    );
}

export default CustomerEnrollService;