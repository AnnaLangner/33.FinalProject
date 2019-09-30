import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Alert, Card, CardImg, CardText, CardBody, CardTitle, Button  } from 'reactstrap';

import Spinner from '../../common/Spinner/Spinner';


class SingleProduct extends React.Component {
    
    componentDidMount() {
        const {loadProducts, resetRequest, match} =this.props;
        loadProducts(match.params.id);
        resetRequest();
    }

    render() {
        const { product, request } = this.props;

        if (request.pending === false && request.success === true && product) {
            return (
                <div>
                    <Card>
                        <CardImg src={'../../../../src/picture/men (1).jpg'}/>
                        <CardBody>
                            <CardTitle>{product.name}</CardTitle>
                            <CardText>{product.price}</CardText>
                            <CardText>{product.content}</CardText>
                            <Button color={'secondary'}>Add to cart</Button>
                        </CardBody>
                    </Card>
                </div>
            );
        } else if (request.pending === true || request.success === null) {
            return (
                <div>
                    <Spinner/>
                </div>
            );
        }else if (request.pending === false && request.error !== null) {
            return (
                <div>
                    <Alert color={'error'}>{request.error}</Alert>
                </div>
            );
        } else if (request.pending === false && request.success === true) {
            return (
                <div>
                    <Alert color={'info'}>No posts</Alert>
                </div>
            );
        } else {
            return (
                <div>
                    <Alert color={'info'}>Something went wrong...</Alert>
                </div>
            );
        }
        
    }
}

SingleProduct.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
        })
    ),
    loadProducts: PropTypes.func.isRequired,
    resetRequest: PropTypes.func.isRequired,
};

export default withRouter(props => <SingleProduct {...props}/>);