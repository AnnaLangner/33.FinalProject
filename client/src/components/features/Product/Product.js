import React from 'react';
import { PropTypes } from 'prop-types';
import ProductsList from "../ProductsList/ProductsList";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import Pagination from '../../common/Pagination/Pagination';

class Product extends React.Component {

    componentDidMount() {
        const { loadProductByPage, initialPage, productPerPage } = this.props;
        loadProductByPage(initialPage || 1, productPerPage || 6);
    }

    loadProductPage = (page) => {
        const { loadProductByPage, productPerPage } = this.props;
        loadProductByPage(page, productPerPage || 6)
    };

    render() {
        const { products, request, pages, presentPage } = this.props;
        let { pagination } = this.props;
        const { loadProductPage } = this;

        if (pagination === undefined) {
            pagination = true
        }
        if (request.pending === false && request.success === true && products.length > 0) {
            return (
                <div>
                    <ProductsList products={products} />
                    { pagination && <Pagination pages={pages} onPageChange={loadProductPage} initialPage={presentPage} /> }
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
        } else if (request.pending === false && request.success === true && products.length === 0) {
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
    loadProductsByPage: PropTypes.func.isRequired,
};

export default Product;