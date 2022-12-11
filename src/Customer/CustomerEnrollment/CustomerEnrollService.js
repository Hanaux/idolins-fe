import React, {useEffect, useState} from "react";
import CustomerInfoEnroll from "./CustomerInfoEnroll";
import {Link} from "react-router-dom";
import {Button, Table} from "react-bootstrap";

function CustomerEnrollService() {
    const [inputs, setInputs] = useState({
        cust_NM : '',
        ssn : '',
        cust_PN : '',
        acc_NM : ''
    });
    const [btnDisable, setBtnDisable] = useState(true);
    const {cust_NM, ssn, cust_PN, acc_NM} = inputs;
    const [sex, setSex] = useState('1');
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
        setSex('1')
        setDoEnroll(false)
    }

    useEffect(()=> {
        if(inputs.acc_NM !== '' && inputs.ssn !== '' && inputs.cust_PN!=='' && inputs.cust_NM!==''){
            setBtnDisable(false)
        }else {setBtnDisable(true)}
    },[inputs]);

    const [doEnroll, setDoEnroll] = useState(false);


    return (
        <div style={{justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div>
                <input name="cust_NM" placeholder="고객 이름" onChange={onChange} value={cust_NM} className="inputStyle"/>
                <input name="ssn" placeholder="주민등록번호" onChange={onChange} value={ssn} className="inputStyle"/>
                <input name="cust_PN" placeholder="전화번호" onChange={onChange} value={cust_PN} className="inputStyle"/>
                <select value={sex} onChange={onChangeSelected} style={{height: "40px", borderColor:"green"}}>
                    <option key="Male" value="1">남성</option>
                    <option key="Female" value="0">여성</option>
                    <option key="Other" value="2">기타</option>
                </select>
                <input name="acc_NM" placeholder="계좌번호" onChange={onChange} value={acc_NM} className="inputStyle"/>
            </div>
            <div style={{
                alignItems:"center", display:"flex", flexDirection:"column",
                marginTop: "3vh"
            }}>
                <h3 style={{fontWeight:"bold", color:"green"}}>저장될 최종 고객정보입니다.</h3>
                <Table bordered hover className="TableStyle">
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
                </Table>
            </div>
            <div>
                <Button onClick={onReset} variant="flat">초기화</Button>
                <Button onClick={()=> setDoEnroll(!doEnroll)} variant="success"
                        disabled={btnDisable}
                >등록</Button>
            </div>
            <div>
                {doEnroll===true?<CustomerInfoEnroll cust_NM={cust_NM} ssn={ssn} cust_PN={cust_PN} sex={sex} acc_NM={acc_NM}/>
                    :<p></p>}
            </div>
        </div>
    );
}

export default CustomerEnrollService;