import React, {useState} from "react";
import InsuranceInfo from "../InsuranceSearch/InsuranceInfo";
import InsuranceInfoEnroll from "./InsuranceInfoEnroll";
import {Link} from "react-router-dom";

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

    let [modal, setModal] = useState(false);
    const {ins_NM, department, target_Cust, detail, insFee, rate, compensation} = inputs;
    const [permission, setPermit] = useState('0');
    // const [info, setinfo] = useState('');
    const onChangeSelected =(e) =>{
        setPermit(e.target.value);
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
            ins_NM : '',
            department : '',
            target_Cust : '',
            detail : '',
            insFee : '',
            rate : '',
            compensation : ''
        })
        setPermit('0')

    }
    //
    // const onEnroll =()=> {
    //     if(modal){
    //         setinfo()
    //     }
    // }

    const blankCheck =()=>{
        if (!ins_NM && !department && !target_Cust && !detail && !insFee && !rate && !compensation){

            return true;
        }
        else return false;
    }

    return (
        <div>
            <div>
                <input name="ins_NM" placeholder="보험 이름" onChange={onChange} value={ins_NM}/>
                <input name="department" placeholder="보험 부서" onChange={onChange} value={department}/>
                <input name="target_Cust" placeholder="보험 이용 고객층" onChange={onChange} value={target_Cust}/>
                <input name="detail" placeholder="보험 추가 정보" onChange={onChange} value={detail}/>
                <input name="insFee" placeholder="보험료" onChange={onChange} value={insFee}/>
                <input name="rate" placeholder="보험 요율" onChange={onChange} value={rate}/>
                <input name="compensation" placeholder="보험 보상" onChange={onChange} value={compensation}/>
                <select value={permission} onChange={onChangeSelected}>
                    <option key="0" value="0">비허용</option>
                </select>
            </div>
            <div>
                <p>저장될 최종 보험정보입니다.</p>
                <table>
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
                        <td>{permission}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={onReset}>초기화</button>
                <button onClick={()=>{
                    setModal(!modal);
                    // onEnroll();
                }}>등록</button>
                {modal === true ? <InsuranceInfoEnroll inputs = {inputs} /> : null}
            </div>
            <Link to="/insurance">
                <button>보험관리서비스 홈으로</button>
            </Link>
        </div>
    );
}

export default InsuranceEnrollService;