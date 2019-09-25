import React from 'react';
import { PropTypes } from 'prop-types';

class Product extends React.Component {

    componentDidMount() {
        const { loadProducts } = this.props;
        loadProducts();
    }

    render() {
        const { products } = this.props;

        return (
            <div>
                Product
                <ul>
                    {products.map(product => <li key={product.id}>{product.brand}</li>)}
                </ul>
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