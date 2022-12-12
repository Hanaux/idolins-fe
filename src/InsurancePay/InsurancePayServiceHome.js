import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button, Tab, Tabs} from "react-bootstrap";
import CalculationService from "./Calculation/CalculationService";
import PaymentService from "./Payment/PaymentService";
import PaycheckService from "./Paycheck/PaycheckService";

function InsurancePayServiceHome() {
    const [key, setKey] = useState('보험금산출');
    return(
        <div className="InnerHomeInterface">
            <div className="IdolInsuranceLogo">
                <img alt="IdolDebut Vehicle Insurance" src="/img/idoldebutins_logo.png"
                     className="InnerLogo"/>
            </div>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="보험금산출" title="보험금산출">
                    <CalculationService />
                </Tab>
                <Tab eventKey="지급품의서" title="지급품의서">
                    <PaymentService />
                </Tab>
                <Tab eventKey="보험지급" title="보험지급">
                    <PaycheckService />
                </Tab>
            </Tabs>
            <Button href="/" variant="flat">IdolDebut Ins.</Button>
        </div>

    );
}

export default InsurancePayServiceHome;