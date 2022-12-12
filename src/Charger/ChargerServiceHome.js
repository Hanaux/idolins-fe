import React, {useState} from "react";
import {Link} from "react-router-dom";
import ChargerEnrollService from "./ChargerEnrollment/ChargerEnrollService";
import ChargerSearchService from "./ChargerSearch/ChargerSearchService";
import ChargerDeleteService from "./ChargerDelete/ChargerDeleteService";
import {Button, Tab, Tabs} from "react-bootstrap";

function ChargerServiceHome() {
    const [key, setKey] = useState('청구정보조회');
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
                <Tab eventKey="청구정보조회" title="청구정보조회">
                    <ChargerSearchService />
                </Tab>
                <Tab eventKey="청구정보등록" title="청구정보등록">
                    <ChargerEnrollService />
                </Tab>
                <Tab eventKey="청구정보삭제" title="청구정보삭제">
                    <ChargerDeleteService />
                </Tab>
            </Tabs>
            <Button href="/" variant="flat">IdolDebut Ins.</Button>
        </div>
    );
}

export default ChargerServiceHome;