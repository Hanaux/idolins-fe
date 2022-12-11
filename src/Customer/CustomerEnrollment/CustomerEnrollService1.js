import React, {useEffect, useState} from "react";
import CustomerInfoEnroll from "./CustomerInfoEnroll";
import {Link} from "react-router-dom";
import {Button, Table} from "react-bootstrap";

function CustomerEnrollService1() {
    const state = {
        nameEntered : '',
        isNameValid : false,
        ssnEntered : '',
        isSsnValid : false,
        phoneNumberEntered : '',
        isPhoneNumberValid : false,
        accountNumberEntered : '',
        isAccountNumberValid : false
    };
    const validateName = nameEntered => {
        if(nameEntered.length > 1) {
            this.setState({
                isNameValid: true,
                nameEntered
            });
        } else {
            this.setState({
                isNameValid: false,
                nameEntered
            })
        }
    }
    const isEnteredNameValid = () => {
        const { nameEntered, isNameValid } = this.state;

        if (nameEntered) return isNameValid;
    };

    const inputClassNameHelper = boolean => {
        switch (boolean) {
            case true:
                return 'is-valid';
            case false:
                return 'is-invalid';
            default:
                return '';
        }
    };

return (
    <div className="App">
        <form className="myForm">
            <div className="form-group">
                <label htmlFor="nameInput">이름</label>
                <input
                    type="text"
                    className={`form-control ${inputClassNameHelper(isEnteredNameValid())}`}
                    id="nameInput"
                    placeholder="홍길동"
                    onChange={e=> validateName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="ssnInput">주민등록번호</label>
                <input
                    type="text"
                    className="form-control"
                    id="ssnInput"
                    placeholder="YYMMDD-OOOOOOO"
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumberInput">전화번호</label>
                <input
                    type="text"
                    className="form-control"
                    id="phoneNumberInput"
                    placeholder="010-1234-1234"
                />
            </div>
            <div className="form-group">
                <label htmlFor="accountInput">계좌번호</label>
                <input
                    type="text"
                    className="form-control"
                    id="accountInput"
                    placeholder="'-' 없이 계좌번호를 입력하세요"
                />
            </div>
            <Button type="submit" className="btn btn-primary btn-block" variant="success">
                등록
            </Button>
        </form>
    </div>
);
}

export default CustomerEnrollService1;