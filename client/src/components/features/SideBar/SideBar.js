import React from 'react';
import { Row, Col, Container, Button } from 'reactstrap';

import './SideBar.css';

class SideBar extends React.Component {

    render() {
        return (
            <Container>
                <div className={'sideBarHead'}>
                    <h1>Sort by:</h1>
                </div>
                <Row className={'side'}>
                    <Col><Button color="link">Name A-Z</Button></Col>
                </Row>
                <Row>
                    <Col><Button color="link">Name Z-A</Button></Col>
                </Row>
                <Row>
                    <Col><Button color="link">Price up</Button></Col>
                </Row>
                <Row>
                    <Col><Button color="link">Price down</Button></Col>
                </Row>
            </Container>
        )
    }
}

export default SideBar;
