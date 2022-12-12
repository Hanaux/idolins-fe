import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import PaymentInfoEnroll from "./PaymentInfoEnroll";
import {Button, Table} from "react-bootstrap";
import PaymentInfo from "./PaymentInfo";
import CalculationInfo from "../Calculation/CalculationInfo";

function PaymentService() {

    const [id, setId] = useState('');
    const [btnDisable1, setBtnDisable1] = useState(true);
    const [btnDisable2, setBtnDisable2] = useState(true);
    let [modal, setModal] = useState(false);
    const [inputs, setInputs] = useState({
        docID : '',
        date  : '',
        accNum : '',
        chargerNum  : '',
        custID  : '',
    });

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    function btnTextChanger(){
        if (modal) {
            return "초기화";
        }
        else return "조회";
    }

    const onChange =(e) => {
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const onReset =()=> {
        setInputs({
            docID : '',
            date  : '',
            accNum : '',
            chargerNum  : '',
            custID  : '',
        })
    }
    const onReset1=()=>{
        if (modal) {
            setId('');
        }
    }
    const [doEnroll, setDoEnroll] = useState(false);
    const {date, accNum, chargerNum, custID, docID} = inputs;

    useEffect(()=> {
        if(inputs.date !== '' && inputs.accNum !== '' && inputs.chargerNum !== '' && inputs.custID!=='' && inputs.docID !== '' ){
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
                    <h5 style={{fontWeight:"bold", color:"green"}}>산출 정보 조회입니다.</h5>
                    <input onChange={onChangeId} value={id} className="inputStyle"
                           placeholder="산출 DOC ID를 입력하세요" type='number'/>
                    <Button variant="search" className="SearchBtn" disabled={btnDisable1}

                            onClick={()=>{
                                setModal(!modal);
                                onReset1();
                            }}
                    >{btnTextChanger()}</Button>
                </div>
                {modal === true ? <CalculationInfo id={id}/> : null}
            </div>
            {/*<h1>지급 품의서</h1>*/}
            {/*/!*산출 조회 화면 출력(docid 입력)*!/*/}
            {/*<div>*/}
            {/*    <h4>산출내역 조회</h4>*/}
            {/*    <input onChange={onChangeId} value={id} placeholder="산출 번호를 입력하세요" type='number'/>*/}
            {/*    <button onClick={()=>{*/}
            {/*        setModal(!modal);*/}
            {/*        onReset();*/}
            {/*    }}>{btnTextChanger()}</button>*/}
            {/*    {modal === true ? <CalculationInfo id={id}/> : null}*/}
            {/*</div>*/}
            <div style={{justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div style={{justifyContent:"center", display:"flex", alignItems:"center", flexWrap:"wrap"}}>
                    <h5 style={{fontWeight:"bold", color:"green"}}>지급품의서 저장입니다.</h5>
                    <input name="docID" placeholder="산출 ID" onChange={onChange} value={docID} className="inputStyle" type='number'/>
                    <input name="date" placeholder="날짜" onChange={onChange} value={date} className="inputStyle" type='text'/>
                    <input name="accNum" placeholder="사고번호" onChange={onChange} value={accNum} className="inputStyle" type='number'/>
                    <input name="chargerNum" placeholder="청구번호" onChange={onChange} value={chargerNum} className="inputStyle" type='number'/>
                    <input name="custID" placeholder="고객 ID" onChange={onChange} value={custID} className="inputStyle" type='number'/>
                </div>
                <div style={{
                    alignItems:"center", display:"flex", flexDirection:"column",
                    marginTop: "3vh"
                }}>
                    <h3 style={{fontWeight:"bold", color:"green"}}>저장될 최종 정보입니다.</h3>
                    <Table bordered hover className="TableStyle">
                        <tbody>
                        <tr>
                            <td>산출 ID</td>
                            <td>{docID}</td>
                        </tr>
                        <tr>
                            <td>날짜</td>
                            <td>{date}</td>
                        </tr>
                        <tr>
                            <td>사고번호</td>
                            <td>{accNum}</td>
                        </tr>
                        <tr>
                            <td>청구번호</td>
                            <td>{chargerNum}</td>
                        </tr>
                        <tr>
                            <td>고객 ID</td>
                            <td>{custID}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Button onClick={onReset} variant="flat">초기화</Button>
                    <Button onClick={()=> setDoEnroll(!doEnroll)} variant="success"
                            disabled={btnDisable2}
                    >등록</Button>
                </div>
            </div>
            {/*결재조회버튼 클릭*/}
            {/*결재조회화면 출력*/}
            <div>
                {doEnroll===true?<PaymentInfoEnroll docID={docID} date={date}
                                                    accNum={accNum} chargerNum={chargerNum} custID={custID}/>
                    :<p></p>}
                {btnDisable2?<p style={{color:'red'}}>유효하지 않은 값이 있습니다. 다시 확인해주세요</p>:<p></p>}
            </div>

        </div>
    );
}

export default PaymentService;