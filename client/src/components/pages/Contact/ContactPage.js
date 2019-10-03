import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const ContactPage = () => {
    return (
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle>Contact</CardTitle>
                    <CardText>A&L Anna Langner</CardText>
                    <CardText>C.H. Osowa</CardText>
                    <CardText>ul. Spacerowa 48</CardText>
                    <CardText>80-299 Gdańsk</CardText>
                    <Button>Go to map</Button>
                </Card>
            </Col>
        </Row>
    )
};

export default ContactPage;