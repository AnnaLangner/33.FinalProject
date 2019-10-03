import React from 'react';
import { Row, Col, Container, Badge, Button } from 'reactstrap';
import loadTestData from '../../../testData';

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
                <div>
                    <h1>Heading <Badge color="secondary">Sort by:</Badge></h1>
                </div>
                <Row>
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
