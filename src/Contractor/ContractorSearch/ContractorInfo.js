import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContractorInfo({id}) {
    const [cont, setCont] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [loading2, setLoading2] = useState(false);
    const [error2, setError2] = useState(null);

    const [inputs, setInputs] = useState({
        contFin : '',
        contStart : '',
        custID : '',
        insID : '',
        // installment : '',
        // isPayment : '' ,
        payDay : '',
        installmentMonth : '',
        lastMonth : '',
        // effective : '',
        installmentStart : ''
    });

    const {contFin, contStart, custID, insID, payDay, installmentMonth, lastMonth, installmentStart} = inputs;

    const [bInputs, setBInputs] = useState({
        installment : false,
        isPayment : false,
        effective : false
    });

    const {installment, isPayment, effective} = bInputs;

    const onChangeSelected =(e) =>{
        setBInputs(e.target.value);
    };
    const onChange =(e) => {
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    };

    const [doModify, setDoModify] = useState(false);


    useEffect(() => {
        const fetchCont = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setCont(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    `http://localhost:8080/insurance/insinfo/${id}`
                );
                console.log(response.data);
                console.log(cont);
                setCont(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchCont();
    }, []);

    useEffect(() => {
        const putCont = async() => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError2(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading2(true);
                const response = await axios.put(`http://localhost:8080/contractor/continfo/modification`,{        // PUT
                    contID: cont.contID,
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
                setError2(e);
            }
            setLoading2(false);
        };
        putCont();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!cont) return null;
    console.log(cont);
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td> 계약 시작일 </td>
                        <td>{cont.contStart}</td>
                        <td>
                            <input name="contStart" placeholder="계약 시작일" onChange={onChange} value={contStart}/>
                        </td>
                    </tr>
                    <tr>
                        <td> 계약 만료일 </td>
                        <td>{cont.contFin}</td>
                        <td>
                            <input name="contFin" placeholder="계약 만료일" onChange={onChange} value={contFin}/>
                        </td>
                    </tr>
                    <tr>
                        <td> 고객 ID </td>
                        <td>{cont.custID}</td>
                        <td>
                            <input name="custID" placeholder="고객 ID" onChange={onChange} value={custID}/>
                        </td>
                    </tr>
                    <tr>
                        <td> 보험 ID </td>
                        <td>{cont.insID}</td>
                        <td>
                        <input name="insID" placeholder="보험 ID" onChange={onChange} value={insID}/>
                        </td>
                    </tr>
                    <tr>
                        <td> 납부 방식 </td>
                        <td>{cont.installment == true ? <p>분할납부</p> : <p>일시불</p>}</td>
                        <td>
                            <select value={installment} onChange={onChangeSelected}>
                                <option key="installment" value="true">분할납부</option>
                                <option key="lumpSum" value="false">일시불</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td> 보험료 지불 여부 </td>
                        <td>{cont.isPayment == true ? <p>납부</p> : <p>불납</p>}</td>
                        <td>
                            <select value={isPayment} onChange={onChangeSelected}>
                                <option key="payed" value="true">납부</option>
                                <option key="notPayed" value="false">불납</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td> 납부일 </td>
                        <td>{cont.payDay}</td>
                        <td>
                            <input name="payDay" placeholder="납부일" onChange={onChange} value={payDay}/>
                        </td>
                    </tr>
                    <tr>
                        <td> 분할 납부 개월 수 </td>
                        <td>{cont.installmentMonth}</td>
                        <td>
                            <input name="installmentMonth" placeholder="분할 납부 개월 수" onChange={onChange} value={installmentMonth}/>
                        </td>
                    </tr>
                    <tr>
                        <td> 남은 개월 수 </td>
                        <td>{cont.lastMonth}</td>
                        <td>
                            <input name="lastMonth" placeholder="남은 개월 수" onChange={onChange} value={lastMonth}/>
                        </td>
                    </tr>
                    <tr>
                        <td> 시행 여부 </td>
                        <td>{cont.effective == true ? <p>시행 중</p> : <p>정지</p>}</td>
                        <td>
                            <select value={effective} onChange={onChangeSelected}>
                                <option key="effective" value="true">시행 중</option>
                                <option key="stop" value="false">정지</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td> 분납 시작일 </td>
                        <td>{cont.installmentStart}</td>
                        <input name="installmentStart" placeholder="분납 시작일" onChange={onChange} value={installmentStart}/>
                    </tr>
                </tbody>
            </table>
            <button onClick={()=>setDoModify(!doModify)}>수정</button>
        </div>
    );
}

export default ContractorInfo;