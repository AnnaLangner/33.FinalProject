import React from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import PageTitle from "../../../components/common/PageTitle/PageTitle";

const ContactPage = () => {
    return (
        <div>
            <PageTitle>Contact</PageTitle>
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardText>A&L Anna Langner</CardText>
                        <CardText>C.H. Osowa</CardText>
                        <CardText>ul. Spacerowa 48</CardText>
                        <CardText>80-299 Gdańsk</CardText>
                        <Button>Go to map</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    )
};

export default ContactPage;