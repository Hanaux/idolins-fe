import React from "react";
import {Button, Card, CardImg} from "react-bootstrap";

function WhoAreWe() {
    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center',
            marginTop:'5vh'}}>
        <div className="CardForm">
                <Card className="CardStyle">
                    <Card.Img variant="top" src="https://placeimg.com/100/80/any" />
                    <Card.Body>
                        <Card.Title>문인배</Card.Title>
                        <Card.Text>학번 : 60201672 <br/> Contact : dumdum@gmail.com</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="CardStyle">
                    <Card.Img variant="top" src="https://placeimg.com/100/80/any" />
                    <Card.Body>
                        <Card.Title>전민근</Card.Title>
                        <Card.Text>학번 : 60181663 <br/> Contact : dumdum@gmail.com</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="CardStyle">
                    <Card.Img variant="top" src="https://placeimg.com/100/80/any" />
                    <Card.Body>
                        <Card.Title>한승헌</Card.Title>
                        <Card.Text>학번 : 60181675 <br/> Contact : hsh990821@gmail.com</Card.Text>
                    </Card.Body>
                </Card>
        </div>
                <Button href="/" variant="flat">IdolDebut Ins.</Button>
        </div>
    );
}

export default WhoAreWe;