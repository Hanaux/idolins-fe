import React, {useState} from "react";
import ChargerInfoEnroll from "./ChargerInfoEnroll";
import {Link} from "react-router-dom";

function ChargerEnrollService() {
    const [inputs, setInputs] = useState({
        custID : '',
        ins_ID : '',
        lossAmountHuman : '',
        lossAmountProperty : ''
    });

    let [modal, setModal] = useState(false);
    const {custID, ins_ID, lossAmountHuman, lossAmountProperty} = inputs;

    // const [info, setinfo] = useState('');

    const onChange =(e) => {
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
        console.log(inputs);
    }

    const onReset =()=> {
        setInputs({
            custID : '',
            ins_ID : '',
            lossAmountHuman : '',
            lossAmountProperty : ''
        })
    }


    const blankCheck =()=>{
        if (!custID && !ins_ID && !lossAmountHuman && !lossAmountProperty){

            return true;
        }
        else return false;
    }

    return (
        <div>
            <div>
                <input name="custID" placeholder="고객 ID" onChange={onChange} value={custID}/>
                <input name="ins_ID" placeholder="보험 ID" onChange={onChange} value={ins_ID}/>
                <input name="lossAmountHuman" placeholder="대인 보험 청구 비용" onChange={onChange} value={lossAmountHuman}/>
                <input name="lossAmountProperty" placeholder="대물 보험 청구 비용" onChange={onChange} value={lossAmountProperty}/>
            </div>
            <div>
                <p>저장될 최종 보험정보입니다.</p>
                <table>
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
                </table>
            </div>
            <div>
                <button onClick={onReset}>초기화</button>
                <button onClick={()=>{
                    setModal(!modal);
                }}>등록</button>
                {modal === true ? <ChargerInfoEnroll inputs = {inputs} /> : null}
            </div>
            <Link to="/charger">
                <button>보험관리서비스 홈으로</button>
            </Link>
        </div>
    );
}

export default ChargerEnrollService;