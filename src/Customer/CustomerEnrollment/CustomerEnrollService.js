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
    const [ssnValid, setSsnValid] = useState(false);
    const [btnDisable, setBtnDisable] = useState(true);
    const {cust_NM, ssn, cust_PN, acc_NM} = inputs;
    const [sex, setSex] = useState(999);
    // };
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
        setDoEnroll(false)
    }

    const validateSsn =()=> {
        const ssnVal = [ssn.at(2), ssn.at(3), ssn.at(4), ssn.at(5), ssn.at(0), ssn.at(6)];
        if(ssn === '') return false;
        if(ssn.length !== 13) return false;
        if(ssnVal.at(0) > 1) return false;
        if(ssnVal.at(0)==1 && ssnVal.at(1)>2) return false;
        if(ssnVal.at(2)>3) return false;
        if(ssnVal.at(2)==3 && ssnVal.at(3)>1) return false;
        if(ssnVal.at(4)==9 && ssnVal.at(5)>2) return false;
        if(ssnVal.at(4)==0 && ssnVal.at(5)<3) return false;
         return true;
    }

    const validatePN =()=> {
        const pnVal = [cust_PN.at(0), cust_PN.at(1)];
        if (cust_PN === '') return false;
        if (cust_PN.length<10) return false;
        if (pnVal.at(0) >0) return false;
        if (pnVal.at(1) != 1) return false;
        return true;
    }

    useEffect(()=> {
        if(ssn.at(6)==='1' || ssn.at(6)==='3') setSex(1)
        else if(ssn.at(6)==='2' || ssn.at(6)==='4') setSex(0)
        else setSex(999)

        if(validateSsn() && inputs.acc_NM !== '' && validatePN() && inputs.cust_NM!=='' && sex<3 ){
            setBtnDisable(false)

        }else {setBtnDisable(true)}
    },[inputs]);

    const [doEnroll, setDoEnroll] = useState(false);


    return (
        <div style={{justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div style={{justifyContent:"center", display:"flex", alignItems:"center", flexWrap:"wrap"}}>
                <input name="cust_NM" placeholder="?????? ??????" onChange={onChange} value={cust_NM} className="inputStyle" type='text'/>
                <input name="ssn" placeholder="?????????????????? '-' ??????"  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                        e.target.value = e.target.value.slice(0, e.target.maxLength);
                }}
                       onChange={onChange} value={ssn} className="inputStyle" type='number' maxLength={13}/>
                <input name="cust_PN" placeholder="???????????? '-' ??????"  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                        e.target.value = e.target.value.slice(0, e.target.maxLength);
                }}
                       onChange={onChange} value={cust_PN} className="inputStyle" type='number' maxLength={11}/>
                <input name="acc_NM" placeholder="???????????? '-' ??????" onChange={onChange} value={acc_NM} className="inputStyle" type='number'/>
            </div>
            <div style={{
                alignItems:"center", display:"flex", flexDirection:"column",
                marginTop: "3vh"
            }}>
                <h3 style={{fontWeight:"bold", color:"green"}}>????????? ?????? ?????????????????????.</h3>
                <Table bordered hover className="TableStyle">
                    <tbody>
                        <tr>
                            <td>????????????</td>
                            <td>{cust_NM}</td>
                        </tr>
                        <tr>
                            <td>??????????????????</td>
                            <td>{ssn.slice(0,6)}-{ssn.slice(6,13)}</td>
                        </tr>
                        <tr>
                            <td>????????????</td>
                            <td>{cust_PN.slice(0,3)}-{cust_PN.slice(3,7)}-{cust_PN.slice(7,11)}</td>
                        </tr>
                        <tr>
                            <td>??????</td>
                            <td>{sex==1?'??????':sex==0?'??????':'?????????/????????????'}</td>
                        </tr>
                        <tr>
                            <td>????????????</td>
                            <td>{acc_NM}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <Button onClick={onReset} variant="flat">?????????</Button>
                <Button onClick={()=> setDoEnroll(!doEnroll)} variant="success"
                        disabled={btnDisable}
                >??????</Button>
            </div>
            <div>
                {doEnroll===true?<CustomerInfoEnroll cust_NM={cust_NM} ssn={ssn}
                    cust_PN={cust_PN} sex={sex} acc_NM={acc_NM}/>
                    :<p></p>}
                {btnDisable?<p style={{color:'red'}}>???????????? ?????? ?????? ????????????. ?????? ??????????????????</p>:<p></p>}
            </div>
        </div>
    );
}

export default CustomerEnrollService;