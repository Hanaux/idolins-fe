import React from "react";
import {Link} from "react-router-dom";
import {Button, ButtonGroup} from "react-bootstrap";
import "./Home.css";
function Home () {

    return (
        <div className="BasicHome">
            <div className="HomeInterface">
                <div className="IdolInsuranceLogo">
                    <img alt="IdolDebut Vehicle Insurance" src="/img/idoldebutins_logo.png"
                    className="LogoImage"/>
                </div>
                <div className="ServiceNav">
                    <ButtonGroup vertical>
                        <Button href="/insurance" variant="flat">보험관리서비스</Button>
                        <Button href="/customer" variant="flat">고객관리서비스</Button>
                        <Button href="/who-r-we" variant="flat-over">Info</Button>
                        <Button href="/contractor" variant="flat">계약관리서비스</Button>
                    </ButtonGroup>
                    <p className="ServiceVer">beta version</p>
                </div>
            </div>
        </div>
    );
}

export default Home;