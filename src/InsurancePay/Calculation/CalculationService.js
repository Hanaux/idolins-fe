import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ChargerInfo from "../../Charger/ChargerSearch/ChargerInfo";
import CalculationInfoEnroll from "./CalculationInfoEnroll";
import {Button, Table} from "react-bootstrap";

function CalculationService() {
    const [inputs, setInputs] = useState({
        accNum : '',
        decisionCompensationProperty : '',
        decisionCompensationHuman : ''
    });

    const [id, setId] = useState('');
    let [modal, setModal] = useState(false);
    const {accNum, decisionCompensationProperty, decisionCompensationHuman} = inputs;
    const [btnDisable, setBtnDisable] = useState(true);
    const [btnDisable2, setBtnDisable2] = useState(true);

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChange =(e) => {
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    function btnTextChanger(){
        if (modal) {
            return "초기화";
        }
        else return "조회";
    }
    const onReset=()=>{
        if (modal) {
            setId('');
        }
    }
    const onResetCal =()=> {
        setInputs({
            accNum : '',
            decisionCompensationProperty : '',
            decisionCompensationHuman : ''
        })
        setDoEnroll(false)
    }

    useEffect(()=>{
        if(id>0) setBtnDisable(false)
        else setBtnDisable(true)
    },[id]);

    useEffect(()=> {
        if(inputs.acc_NM !== '' && inputs.decisionCompensationProperty !== '' && inputs.decisionCompensationHuman !== '' ){
            setBtnDisable2(false)

        }else {setBtnDisable2(true)}
    },[inputs]);

    const [doEnroll, setDoEnroll] = useState(false);

    return(
        <div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <h5 style={{fontWeight:"bold", color:"green"}}>청구 정보 조회입니다.</h5>
                    <input onChange={onChangeId} value={id} className="inputStyle"
                           placeholder="청구번호를 입력하세요" type='number'/>
                    <Button variant="search" className="SearchBtn" disabled={btnDisable}

                            onClick={()=>{
                            setModal(!modal);
                            onReset();
                            }}
                    >{btnTextChanger()}</Button>
                </div>
                {modal === true ? <ChargerInfo id={id}/> : null}
            </div>

            <div style={{justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div style={{justifyContent:"center", display:"flex", alignItems:"center", flexWrap:"wrap"}}>
                    <h5 style={{fontWeight:"bold", color:"green"}}>산출 내역 저장입니다.</h5>
                    <input name="accNum" placeholder="사고 번호" onChange={onChange} value={accNum}  className="inputStyle" type='number'/>
                    <input name="decisionCompensationProperty" placeholder="대인 보험 결정 비용" onChange={onChange} value={decisionCompensationProperty}  className="inputStyle" type='number'/>
                    <input name="decisionCompensationHuman" placeholder="대물 보험 결정 비용" onChange={onChange} value={decisionCompensationHuman}  className="inputStyle" type='number'/>
                </div>
                <div style={{
                    alignItems:"center", display:"flex", flexDirection:"column",
                    marginTop: "3vh"
                }}>
                    <h3 style={{fontWeight:"bold", color:"green"}}>저장될 최종 고객정보입니다.</h3>
                    <Table bordered hover className="TableStyle">
                        <tbody>
                        <tr>
                            <td> 사고 번호 </td>
                            <td>{accNum}</td>
                        </tr>
                        <tr>
                            <td> 대인 보험 결정 비용 </td>
                            <td>{decisionCompensationProperty}</td>
                        </tr>
                        <tr>
                            <td> 대물 보험 결정 비용 </td>
                            <td>{decisionCompensationHuman}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Button onClick={onResetCal} variant="flat">초기화</Button>
                    <Button onClick={()=> setDoEnroll(!doEnroll)} variant="success"
                            disabled={btnDisable2}
                    >등록</Button>
                </div>
                <div>
                    {doEnroll===true?<CalculationInfoEnroll accNum={accNum}
                                                         decisionCompensationProperty={decisionCompensationProperty}
                                                         decisionCompensationHuman={decisionCompensationHuman}/>
                        :<p></p>}
                    {btnDisable2?<p style={{color:'red'}}>유효하지 않은 값이 있습니다. 다시 확인해주세요</p>:<p></p>}
                </div>
            </div>
        </div>
    );
}

export default CalculationService;