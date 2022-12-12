import React, {useEffect, useState} from "react";
import ChargerInfoEnroll from "./ChargerInfoEnroll";
import {Link} from "react-router-dom";
import {Button, Table} from "react-bootstrap";

function ChargerEnrollService() {
    const [inputs, setInputs] = useState({
        custID : '',
        ins_ID : '',
        lossAmountHuman : '',
        lossAmountProperty : ''
    });

    const [btnDisable, setBtnDisable] = useState(true);
    const {custID, ins_ID, lossAmountHuman, lossAmountProperty} = inputs;

    // const [info, setinfo] = useState('');

    const onChange =(e) => {
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const onReset =()=> {
        setInputs({
            custID : '',
            ins_ID : '',
            lossAmountHuman : '',
            lossAmountProperty : ''
        })
        setDoEnroll(false)
    }


    useEffect(()=> {

        if(inputs.custID !== '' && inputs.ins_ID !== '' && inputs.lossAmountHuman !== '' && inputs.lossAmountProperty!==''){
            setBtnDisable(false)

        }else {setBtnDisable(true)}
    },[inputs]);

    const [doEnroll, setDoEnroll] = useState(false);

    return (
        <div style={{justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div style={{justifyContent:"center", display:"flex", alignItems:"center", flexWrap:"wrap"}}>
                <input name="custID" placeholder="고객 ID" onChange={onChange} value={custID} className="inputStyle" type='number'/>
                <input name="ins_ID" placeholder="보험 ID" onChange={onChange} value={ins_ID} className="inputStyle" type='number'/>
                <input name="lossAmountHuman" placeholder="대인 보험 청구 비용" onChange={onChange} value={lossAmountHuman} className="inputStyle" type='number'/>
                <input name="lossAmountProperty" placeholder="대물 보험 청구 비용" onChange={onChange} value={lossAmountProperty} className="inputStyle" type='number'/>
            </div>
            <div style={{
                alignItems:"center", display:"flex", flexDirection:"column",
                marginTop: "3vh"
            }}>
                <h3 style={{fontWeight:"bold", color:"green"}}>저장될 최종 청구정보입니다.</h3>
                <Table bordered hover className="TableStyle">
                    <tbody>
                    <tr>
                        <td> 고객 ID </td>
                        <td>{custID}</td>
                    </tr>
                    <tr>
                        <td> 보험 ID </td>
                        <td>{ins_ID}</td>
                    </tr>
                    <tr>
                        <td> 대인 보험 청구 비용 </td>
                        <td>{lossAmountHuman}</td>
                    </tr>
                    <tr>
                        <td> 대물 보험 청구 비용 </td>
                        <td>{lossAmountProperty}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <Button onClick={onReset} variant="flat">초기화</Button>
                <Button onClick={()=> setDoEnroll(!doEnroll)} variant="success"
                        disabled={btnDisable}
                >등록</Button>
            </div>
            <div>
                {doEnroll===true?<ChargerInfoEnroll custID={custID} ins_ID={ins_ID}
                                                    lossAmountHuman={lossAmountHuman} lossAmountProperty={lossAmountProperty}/>
                    :<p></p>}
                {btnDisable?<p style={{color:'red'}}>유효하지 않은 값이 있습니다. 다시 확인해주세요</p>:<p></p>}
            </div>
        </div>
    );
}

export default ChargerEnrollService;