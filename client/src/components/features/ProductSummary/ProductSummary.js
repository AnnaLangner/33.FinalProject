import React from 'react';
import { PropTypes } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardImg, CardText, CardBody, CardTitle, CardLink } from 'reactstrap';
import men1 from '../../../picture/men1.jpg'

const ProductSummary = ({ name, price }) => (
    <div className={'product-summary'}>
        <Card>
            <CardImg src={men1}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{price}</CardText>
                <CardLink href={'#'}>More about </CardLink>
            </CardBody>
        </Card>
    </div>
);

ProductSummary.propTypes = {
    id: PropTypes.string,
    picture: PropTypes.object,
    name: PropTypes.string,
    price: PropTypes.string,
};

export default ProductSummary;