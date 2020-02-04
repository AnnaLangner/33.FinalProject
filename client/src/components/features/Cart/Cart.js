import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '../../common/Button/Button';
import PageTitle from '../../common/PageTitle/PageTitle';
import Alert from '../../common/Alert/Alert'
import './Cart.css';

class Cart extends React.Component {

    handleRemoveProduct = (_id) => {
        const { removeCartProduct } = this.props;
        removeCartProduct(_id);
    };

    render() {
        const {products, increaseProductAmount, decreaseProductAmount } = this.props;
        return (
            <div>
                <PageTitle>Shopping Cart</PageTitle>
                <ul>
                    {products.length !== 0 ? products.map(item =>
                        <li key={item}>
                            {item.product.name}
                            {item.product.price}
                            <Button onClick={ () => {decreaseProductAmount(item.product._id)}} variant={'danger'} className={'buttonClick'}>-</Button>
                            <span>{item.amount}</span>
                            <Button onClick={ () => {increaseProductAmount(item.product._id)}} variant={'success'} className={'buttonClick'}>+</Button>
                            <Button onClick={ () => {this.handleRemoveProduct(item.product._id)} } variant={'danger'}>Delete</Button>
                        </li>
                    ) : <Alert variant={'danger'}>Your shopping cart is empty!</Alert>}
                </ul>
            </div>
        );
    }
}

Cart.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            content: PropTypes.string,
            price: PropTypes.string,
            amount: PropTypes.number,
        }).isRequired
    ).isRequired,
    removeCartProduct: PropTypes.func.isRequired,
};

export default withRouter(props => <Cart {...props}/>);