import React, {useState} from "react";
import {Button, Tab, Tabs} from "react-bootstrap";
import InsuranceEnrollService from "./InsuranceEnrollment/InsuranceEnrollService";
import InsuranceSearchService from "./InsuranceSearch/InsuranceSearchService";
import InsurancePermissionService from "./InsurancePermission/InsurancePermissionService";
import InsuranceDeleteService from "./InsuranceDelete/InsuranceDeleteService";

function CustomerServiceHome() {
    const [key, setKey] = useState('보험정보조회');

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
                <Tab eventKey="보험정보조회" title="보험정보조회">
                    <InsuranceSearchService />
                </Tab>
                <Tab eventKey="보험정보등록" title="보험정보등록">
                    <InsuranceEnrollService />
                </Tab>
                <Tab eventKey="보험허가등록" title="보험허가등록">
                    <InsurancePermissionService />
                </Tab>
                <Tab eventKey="보험정보삭제" title="보험정보삭제">
                    <InsuranceDeleteService />
                </Tab>
            </Tabs>
            <Button href="/" variant="flat">IdolDebut Ins.</Button>
        </div>

    );
}

export default CustomerServiceHome;