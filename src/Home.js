import React from "react";
import {Link} from "react-router-dom";
import {Button, ButtonGroup} from "react-bootstrap";
import "./Home.css";
function Home () {

    return (
        <div>
        <div className="BasicHome">
            <div className="HomeInterface">
                <div className="IdolInsuranceLogo">
                    <img alt="IdolDebut Vehicle Insurance" src="/img/idoldebutins_logo.png"
                    className="LogoImage"/>
                </div>
                <div className="ServiceNav">
                    <p className="ServiceVer">v1.0.0-beta</p>
                    <ButtonGroup vertical>
                        <Button href="/insurance" variant="flat">보험관리서비스</Button>
                        <Button href="/customer" variant="flat">고객관리서비스</Button>
                        <Button href="/contractor" variant="flat">계약관리서비스</Button>
                        <Button href="/who-r-we" variant="flat-over">Info</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
            <div className="footer">
                <p style={{margin:'0'}}>ERP Project of Distributed Programming Class</p>
                COPYRIGHTⓒ(C) MYONGJI UNIV. ALL RIGHTS RESERVED.
            </div>
        </div>
    );
}

export default Home;