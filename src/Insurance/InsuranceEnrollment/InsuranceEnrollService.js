import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Table} from "react-bootstrap";
import InsuranceInfoEnroll from "./InsuranceInfoEnroll";

function InsuranceEnrollService() {
    const [inputs, setInputs] = useState({
        ins_NM : '',
        department : '',
        target_Cust : '',
        detail : '',
        insFee : '',
        rate : '',
        compensation : '',
        permission : ''
    });

    const [btnDisable, setBtnDisable] = useState(true);
    const {ins_NM, department, target_Cust, detail, insFee, rate, compensation, permission} = inputs;
    const [permit, setPermit] = useState(999);

    const onChange =(e) => {
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const onReset =()=> {
        setInputs({
            ins_NM : '',
            department : '',
            target_Cust : '',
            detail : '',
            insFee : '',
            rate : '',
            compensation : '',
            permission : ''
        })

    }
    //
    // const onEnroll =()=> {
    //     if(modal){
    //         setinfo()
    //     }
    // }

    useEffect(()=> {
        if(permission ==='1') setPermit(1)
        else if(permission ==='0') setPermit(0)
        else setPermit(999)

        if(inputs.ins_NM !== ''  && inputs.department !== '' && inputs.target_Cust !== ''  && inputs.detail!=='' && inputs.insFee!=='' &&
            inputs.rate!=='' && inputs.compensation!==''){
            setBtnDisable(false)
        }else {setBtnDisable(true)}
    },[inputs]);

    const [doEnroll, setDoEnroll] = useState(false);

    return (
        <div style={{justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div style={{justifyContent:"center", display:"flex", alignItems:"center", flexWrap:"wrap"}}>
                <input name="ins_NM" placeholder="보험 이름" onChange={onChange} value={ins_NM} className="inputStyle" type='text'/>
                <input name="department" placeholder="보험 부서" onChange={onChange} value={department} className="inputStyle" type='text'/>
                <input name="target_Cust" placeholder="보험 이용 고객층" onChange={onChange} value={target_Cust} className="inputStyle" type='text'/>
                <input name="detail" placeholder="보험 추가 정보" onChange={onChange} value={detail} className="inputStyle" type='text'/>
                <input name="insFee" placeholder="보험료" onChange={onChange} value={insFee} className="inputStyle" type='number'/>
                <input name="rate" placeholder="보험 요율" onChange={onChange} value={rate} className="inputStyle" type='number'/>
                <input name="compensation" placeholder="보험 보상" onChange={onChange} value={compensation} className="inputStyle" type='number'/>
                <input name="permission" placeholder="보험 허용" onChange={onChange} value={permission} className="inputStyle" type='number'/>
            </div>
            <div style={{
                alignItems:"center", display:"flex", flexDirection:"column",
                marginTop: "3vh"
            }}>
                <h3 style={{fontWeight:"bold", color:"green"}}>저장될 최종 보험정보입니다.</h3>
                <Table bordered hover className="TableStyle">
                    <tbody>
                    <tr>
                        <td> 보험 이름 </td>
                        <td>{ins_NM}</td>
                    </tr>
                    <tr>
                        <td> 보험 담당 부서 </td>
                        <td>{department}</td>
                    </tr>
                    <tr>
                        <td> 보험 고객층 </td>
                        <td>{target_Cust}</td>
                    </tr>
                    <tr>
                        <td> 보험 세부정보 </td>
                        <td>{detail}</td>
                    </tr>
                    <tr>
                        <td> 보험료 </td>
                        <td>{insFee}</td>
                    </tr>
                    <tr>
                        <td> 보험 비율 </td>
                        <td>{rate}</td>
                    </tr>
                    <tr>
                        <td> 보험 보상 </td>
                        <td>{compensation}</td>
                    </tr>
                    <tr>
                        <td> 보험 허용 </td>
                        <td>{permit==1?'허용':'비허용'}</td>
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
                    {doEnroll===true?<InsuranceInfoEnroll ins_NM={ins_NM} department={department}
                                                          target_Cust={target_Cust} detail={detail} insFee={insFee}
                                                          rate={rate} compensation={compensation} permission={permission}/>
                        :<p></p>}
                    {btnDisable?<p style={{color:'red'}}>유효하지 않은 값이 있습니다. 다시 확인해주세요</p>:<p></p>}
                </div>
        </div>
    );
}

export default InsuranceEnrollService;