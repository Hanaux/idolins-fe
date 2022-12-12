import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import PaymentInfo from "../Payment/PaymentInfo";
import PaycheckInfoEnroll from "./PaycheckInfoEnroll";
import {Button, Table} from "react-bootstrap";
import CustomerInfo from "../../Customer/CustomerSearch/CustomerInfo";
import CustomerInfoEnroll from "../../Customer/CustomerEnrollment/CustomerInfoEnroll";

function PaycheckService() {
    const [inputs, setInputs] = useState({
        payID : '',
        paymentReportOK : '',
        paymentCompleted : ''
    });

    const [id, setId] = useState('');
    let [modal, setModal] = useState(false);
    const {payID, paymentReportOK, paymentCompleted} = inputs;
    const [btnDisable1, setBtnDisable1] = useState(true);
    const [btnDisable2, setBtnDisable2] = useState(true);
    const [reportOK, setreportOK] = useState(999);
    const [complete, setComplete] = useState(999);

    const onChangeId = (e) => {
        setId(e.target.value);
    }
    function btnTextChanger(){
        if (modal) {
            return "초기화";
        }
        else return "조회";
    }

    const onReset1=()=>{
        if (modal) {
            setId('');
        }
    }

    const onChange =(e) => {
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
        console.log(inputs);
    }

    const onResetPay =()=> {
        setInputs({
            payID : '',
            paymentReportOK : '',
            paymentCompleted : ''
        })
    }

    const [doEnroll, setDoEnroll] = useState(false);

    useEffect(()=> {
        if(paymentReportOK ==='1') setreportOK(1)
        else if(paymentReportOK === '0') setreportOK(0)
        else setreportOK(999)

        if(paymentCompleted ==='1') setComplete(1)
        else if(paymentCompleted === '0') setComplete(0)
        else setComplete(999)

        if( inputs.payID !== ''  && inputs.paymentReportOK !== '' &&  inputs.paymentCompleted !== ''){
            setBtnDisable2(false)

        }else {setBtnDisable2(true)}
    },[inputs]);

    useEffect(()=>{
        if(id>0) setBtnDisable1(false)
        else setBtnDisable1(true)
    },[id]);

    return(
        <div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <h5 style={{fontWeight:"bold", color:"green"}}>지급품의서 조회입니다.</h5>
                    <input onChange={onChangeId} value={id} className="inputStyle"
                           placeholder="지급품의서 ID를 입력하세요" type='number'/>
                    <Button variant="search" className="SearchBtn" disabled={btnDisable1}

                            onClick={()=>{
                                setModal(!modal);
                                onReset1();
                            }}
                    >{btnTextChanger()}</Button>
                </div>
                {modal === true ? <PaymentInfo id={id}/> : null}
            </div>

            <div style={{justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div style={{justifyContent:"center", display:"flex", alignItems:"center", flexWrap:"wrap"}}>
                    <h5 style={{fontWeight:"bold", color:"green"}}>보험급지급 저장입니다.</h5>
                    <input name="payID" placeholder="지급품의서 번호" onChange={onChange} value={payID} className="inputStyle" type='number'/>
                    <input name="paymentReportOK" placeholder="보험지급레포트확인" onChange={onChange} value={paymentReportOK} className="inputStyle" type='number'/>
                    <input name="paymentCompleted" placeholder="보험지급완료여부" onChange={onChange} value={paymentCompleted} className="inputStyle" type='number'/>
                </div>
                <div style={{
                    alignItems:"center", display:"flex", flexDirection:"column",
                    marginTop: "3vh"
                }}>
                    <h3 style={{fontWeight:"bold", color:"green"}}>저장될 최종 정보입니다.</h3>
                    <Table bordered hover className="TableStyle">
                        <tbody>
                        <tr>
                            <td>지급품의서 번호</td>
                            <td>{payID}</td>
                        </tr>
                        <tr>
                            <td>보험지급레포트확인</td>
                            <td>{reportOK==1?'확인':'확인안함'}</td>
                        </tr>
                        <tr>
                            <td>보험지급완료여부</td>
                            <td>{complete==1?'확인':'확인안함'}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Button onClick={onResetPay} variant="flat">초기화</Button>
                    <Button onClick={()=> setDoEnroll(!doEnroll)} variant="success"
                            disabled={btnDisable2}
                    >등록</Button>
                </div>
                <div>
                    {doEnroll===true?<PaycheckInfoEnroll payID={payID} paymentReportOK={paymentReportOK}
                                                         paymentCompleted={paymentCompleted} />
                        :<p></p>}
                    {btnDisable2?<p style={{color:'red'}}>유효하지 않은 값이 있습니다. 다시 확인해주세요</p>:<p></p>}
                </div>
            </div>

            {/*<div>*/}
            {/*    <h4>보험급지급</h4>*/}
            {/*    <input name="payID" placeholder="지급품의서 번호" onChange={onChange} value={payID}/>*/}
            {/*    <input name="paymentReportOK" placeholder="보험지급레포트확인" onChange={onChange} value={paymentReportOK}/>*/}
            {/*    <input name="paymentCompleted" placeholder="보험지급완료여부" onChange={onChange} value={paymentCompleted}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <p>저장될 최종 품의지급서입니다.</p>*/}
            {/*    <table>*/}
            {/*        <tbody>*/}
            {/*        <tr>*/}
            {/*            <td> 지급품의서 번호 </td>*/}
            {/*            <td>{payID}</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <td> 보험지급레포트확인 </td>*/}
            {/*            <td>{paymentReportOK}</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <td> 보험지급완료여부 </td>*/}
            {/*            <td>{paymentCompleted}</td>*/}
            {/*        </tr>*/}
            {/*        </tbody>*/}
            {/*    </table>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button onClick={onResetPay}>초기화</button>*/}
            {/*    <button onClick={()=>{*/}
            {/*        setModal(!modal);*/}
            {/*    }}>등록</button>*/}
            {/*    {modal === true ? <PaycheckInfoEnroll inputs = {inputs} /> : null}*/}
            {/*</div>*/}
            {/*/!*지급처리버튼 클릭*!/*/}
            {/*/!*확인 버튼 클릭*!/*/}

            {/*<Link to="/pay">*/}
            {/*    <button>홈으로 가기</button>*/}
            {/*</Link>*/}
        </div>
    );
}

export default PaycheckService;