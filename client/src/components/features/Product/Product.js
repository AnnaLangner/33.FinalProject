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
        const { products } = this.props;

        return (
            <div>
                {request.pending && <Spinner/>}
                <ProductsList products={products} />
            </div>
        );
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