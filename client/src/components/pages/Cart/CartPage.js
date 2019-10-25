import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'reactstrap';
import Cart from '../../features/Cart/CartContainer'


const CartPage = () => (
    <Container>
        <Row>
            <Col xs={9}>
                <Cart/>
            </Col>
            <Col xs={3}>
                <p>okienka zwiększające ilość rzeczy w koszyku </p>
            </Col>
        </Row>
    </Container>
);

export default CartPage;