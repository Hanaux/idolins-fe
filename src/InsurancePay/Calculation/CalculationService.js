import React, {useState} from "react";
import {Link} from "react-router-dom";
import ChargerInfo from "../../Charger/ChargerSearch/ChargerInfo";
import CalculationInfoEnroll from "./CalculationInfoEnroll";

function CalculationService() {
    const [inputs, setInputs] = useState({
        accNum : '',
        decisionCompensationProperty : '',
        decisionCompensationHuman : ''
    });

    const [id, setId] = useState('');
    let [modal, setModal] = useState(false);
    const {accNum, decisionCompensationProperty, decisionCompensationHuman} = inputs;

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChange =(e) => {
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
        console.log(inputs);
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
    }

    return(
        <div>
            <h1>보험금 산출</h1>
            {/*청구 조회 화면 출력(사고접수번호 입력)*/}
            <div>
            <h4>청구내역 조회</h4>
            <input onChange={onChangeId} value={id} placeholder="청구 번호를 입력하세요" type='number'/>
            <button onClick={()=>{
                setModal(!modal);
                onReset();
            }}>{btnTextChanger()}</button>
            {modal === true ? <ChargerInfo id={id}/> : null}
            </div>
            {/*손해액 입력 결정 보험금 산출 버튼 클릭*/}
            {/*결과 보고 등록 버튼을 누름*/}
            <div>
                <h4> 산출 내역 저장</h4>
                <input name="accNum" placeholder="사고 번호" onChange={onChange} value={accNum}/>
                <input name="decisionCompensationProperty" placeholder="대인 보험 결정 비용" onChange={onChange} value={decisionCompensationProperty}/>
                <input name="decisionCompensationHuman" placeholder="대물 보험 결정 비용" onChange={onChange} value={decisionCompensationHuman}/>
            </div>
            <div>
                <p>저장될 최종 보험정보입니다.</p>
                <table>
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
                </table>
            </div>
            <div>
                <button onClick={onResetCal}>초기화</button>
                <button onClick={()=>{
                    setModal(!modal);
                }}>등록</button>
                {modal === true ? <CalculationInfoEnroll inputs = {inputs} /> : null}
            </div>

            <Link to="/pay">
                <button>홈으로 가기</button>
            </Link>
        </div>
    );
}

export default CalculationService;