import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container, Button } from 'reactstrap';
import loadTestData from '../../../testData';

import './SideBar.css';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: loadTestData,
            direction: {
                price: 'asc'
            }
        };
        this.sortBy = this.sortBy.bind(this);
    }

    sortBy(key) {
        this.setState({
            data: loadTestData.sort((a, b) =>
                this.state.direction[key] === 'asc'
                    ? parseFloat(a[key]) - parseFloat(b[key])
                    : parseFloat(b[key]) - parseFloat(a[key])
            ),
            direction: {
                [key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc'
            }
        });
    }

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
                    <Col data={this.state.data} sortBy={this.sortBy}><Button color="link">Price up</Button></Col>
                </Row>
                <Row>
                    <Col><Button color="link">Price down</Button></Col>
                </Row>
            </Container>
        )
    }
}

export default SideBar;
