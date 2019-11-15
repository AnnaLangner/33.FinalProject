import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container, Button } from 'reactstrap';

import './SideBar.css';

const SideBar = ({ setSortOptions }) =>  {
    const handleOnClick = (key, direction) => {
        setSortOptions({key, direction});
    };


    return (
        <Container>
            <div className={'sideBarHead'}>
                <h1>Sort by:</h1>
            </div>
            <Row>
                <Col><Button onClick={() => handleOnClick('name', 'asc')} color="link">Name A-Z</Button></Col>
            </Row>
            <Row>
                <Col><Button onClick={() => handleOnClick('name', 'desc')} color="link">Name Z-A</Button></Col>
            </Row>
            <Row>
                <Col><Button onClick={() => handleOnClick('price', 'asc')} color="link">Price up</Button></Col>
            </Row>
            <Row>
                <Col><Button onClick={() => handleOnClick('price', 'desc')} color="link">Price down</Button></Col>
            </Row>
        </Container>
    )
};

SideBar.propTypes = {
    setSortOptions: PropTypes.func.isRequired
};

export default SideBar;
