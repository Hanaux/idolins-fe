import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContractorInfoForModify from "./ContractorInfoForModify";

function ContractorList({id}) {
    const [cont, setCont] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [connectTimer, setConnectTimer] = useState(0);

    const [contractorID, setContractorID] = useState(null);
    const [on, setOn] = useState(false);

    const onClickContractorID = (e) => {
        const{value} = e.target;
        setContractorID(value);
        setOn(!on);
    }

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

                const cont = await axios.get(
                    `http://localhost:8080/contractor/continfo/customer/${id}`
                );
                console.log(cont);
                console.log(cont.data);
                
                
                
                setCont(cont.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
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
    } else return <div className="ErrStatus">현재 시스템의 장애가 발생하여 해당 화면을 출력할 수 없습니다. <br/> 잠시후에 다시 시도해주세요</div>


    if (error !== null && error.data !==null){
        return ( <div>
                    <div className="ErrStatus">{errMsg}</div>
                    <div>해당정보에 일치하는 계약정보가 없습니다.</div>
                </div>);
        ;
    }
    if (!cont) return null;

    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // if (!cont) return null;
    // console.log(cont);
    const conts = cont.split(" ");
    conts.pop();
    return (
        <div>
            <p>수정을 원하는 계약 ID를 선택하세요</p>
            <table>
                <tbody>
                    <tr>
                        {/* <td>{cont}</td> */}
                        {conts.map((item) => {
                            return(
                                <td>
                                    <button onClick={onClickContractorID} value={item}>
                                        {item}
                                    </button>
                                </td>
                            );
                        })}
                    </tr>
                </tbody>
            </table>
            {on == true  ? <ContractorInfoForModify id={contractorID}/> : null}
            {/* <table>
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
            <button onClick={()=>setDoModify(!doModify)}>수정</button> */}
        </div>
    );
}

export default ContractorList;