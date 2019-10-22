import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import Spinner from '../../common/Spinner/Spinner';
import men1 from "../../../picture/men1.jpg";

import Button from '../../common/Button/Button';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from "../../common/SmallTitle/SmallTitle";
import Alert from '../../common/Alert/Alert';

class SingleProduct extends React.Component {
    
    componentDidMount() {
        const {loadProducts, resetRequest, match} =this.props;
        loadProducts(match.params.id);
        resetRequest();
    }

    render() {
        const { product, request } = this.props;
        console.log(request.pending);
        console.log(request.success );
        console.log(product);
        if (request.pending === false && request.success === true && product) {
            return (
                <div>
                    <img src={men1}/>
                    <SmallTitle>{product.name}</SmallTitle>
                    <p>{product.price}</p>
                    <HtmlBox>{product.content}</HtmlBox>
                    <Button variant={'secondary'}>Add to cart</Button>
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
                    <Alert variant={'error'}>{request.error}</Alert>
                </div>
            );
        } else if (request.pending === false && request.success === true) {
            return (
                <div>
                    <Alert variant={'info'}>No product</Alert>
                </div>
            );
        } else {
            return (
                <div>
                    <Alert variant={'info'}>Something went wrong...</Alert>
                </div>
            );
        }
        
    }
}

SingleProduct.propTypes = {
    products:
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
        }),

    loadProducts: PropTypes.func.isRequired,
    resetRequest: PropTypes.func.isRequired,
};

export default withRouter(props => <SingleProduct {...props}/>);