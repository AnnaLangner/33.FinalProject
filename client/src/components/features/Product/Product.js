import React from 'react';
import { PropTypes } from 'prop-types';
import ProductsList from "../ProductsList/ProductsList";
import Spinner from "../../common/Spinner/Spinner";

class Product extends React.Component {

    componentDidMount() {
        const { loadProducts } = this.props;
        loadProducts();
    }

    render() {
        const { products, request } = this.props;

        if (request.pending === false && request.success === true && products.length > 0) {
            return (
                <div>
                    <ProductsList products={products} />
                </div>
            );
        } else if (request.pending === true && request.success === null && request.error === null) {
            return (
                <div>
                    <Spinner/>
                </div>
            );
        } else if (request.pending === false && request.error != null) {
            return (
                <div>
                    <Alert variant={'error'}>{request.error}</Alert>
                </div>
            );
        } else if (request.pending === false && request.success === true && posts.length === 0) {
            return (
                <div>
                    <Alert variant={'info'}>No posts</Alert>
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

Product.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            model: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
    loadProducts: PropTypes.func.isRequired,
};

export default Product;