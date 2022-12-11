import React, {useState} from "react";
import "./CustomerServiceHome.css";
import {Button, Tab, Tabs} from "react-bootstrap";
import CustomerSearchService from "./CustomerSearch/CustomerSearchService";
import CustomerEnrollService from "./CustomerEnrollment/CustomerEnrollService";
import CustomerDeletionService from "./CustomerDeletion/CustomerDeletionService";
import CustomerEnrollService1 from "./CustomerEnrollment/CustomerEnrollService1";
import CustomerUpdateService from "./CustomerUpdate/CustomerUpdateService";

function CustomerServiceHome() {
    const [key, setKey] = useState('고객정보조회');
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
                <Tab eventKey="고객정보조회" title="고객정보조회">
                    <CustomerSearchService />
                </Tab>
                <Tab eventKey="고객정보등록" title="고객정보등록">
                    <CustomerEnrollService />
                </Tab>
                <Tab eventKey="고객이름수정" title="고객정보수정">
                    <CustomerUpdateService />
                </Tab>
                <Tab eventKey="고객정보삭제" title="고객정보삭제">
                    <CustomerDeletionService />
                </Tab>
            </Tabs>
            <Button href="/" variant="flat">IdolDebut Ins.</Button>
        </div>
    );

}

export default CustomerServiceHome;