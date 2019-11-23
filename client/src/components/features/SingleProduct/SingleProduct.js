import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter} from 'react-router-dom';

import Spinner from '../../common/Spinner/Spinner';
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

    handleClick = () => {
        const { addCartProduct, product } = this.props;
        addCartProduct({ product: product._id , amount: 1});
        this.props.history.push('/cart');
    };

    render() {
        const { product, request } = this.props;
        if (request.pending === false && request.success === true && product) {
            return (
                <div>
                    <img src={product.image.src} alt={'clothes'}/>
                    <SmallTitle>{product.name}</SmallTitle>
                    <p>{product.price}</p>
                    <HtmlBox>{product.content}</HtmlBox>
                    <Button onClick={this.handleClick} variant={'secondary'}>Add to cart</Button>
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
            image: PropTypes.object.isRequired
        }),

    loadProducts: PropTypes.func.isRequired,
    resetRequest: PropTypes.func.isRequired,
};

export default withRouter(props => <SingleProduct {...props}/>);