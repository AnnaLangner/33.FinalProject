import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Card, Badge, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export class ProductSummary extends React.Component {
    render() {
        const { id, tag, image, name, price } = this.props;

        return (
            <Col className="product-summary" md={5}>
                <Link to={`/products/${id}`}>
                    <Card>
                        { tag ? <Badge color="info">{tag}</Badge> : <span className="non-badge"></span> }
                        <CardImg src={image.src} alt='clothes'/>
                        <CardBody>
                            <CardTitle>{name}</CardTitle>
                            <CardSubtitle>{price}</CardSubtitle>
                        </CardBody>
                    </Card>
                </Link>
            </Col>
        )
    }
}

ProductSummary.propTypes = {
    id: PropTypes.string,
    image: PropTypes.object,
    name: PropTypes.string,
    price: PropTypes.string,
    tag: PropTypes.string,
};

export default ProductSummary;