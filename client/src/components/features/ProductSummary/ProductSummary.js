import React from 'react';
import { PropTypes } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import cutText from "../../../utils/cutText";

const ProductSummary = ({ content, name, price }) => (
    <div className={'product-summary'}>
        <Card>
            <CardImg src={'./picture/men (1).jpg'}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{price}</CardText>
                <CardText>{cutText(content, 250)}</CardText>
                <Button color={'secondary'}>Add to cart</Button>
            </CardBody>
        </Card>
    </div>
);

ProductSummary.propTypes = {
    id: PropTypes.string,
    picture: PropTypes.object,
    content: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
};

export default ProductSummary;