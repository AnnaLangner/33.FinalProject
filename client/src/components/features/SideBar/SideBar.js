import React from 'react';
import { Row, Col } from 'reactstrap';
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
            <Row>
                <Col data={this.state.data} sortBy={this.sortBy}/>
            </Row>
        )
    }
}

export default SideBar;
