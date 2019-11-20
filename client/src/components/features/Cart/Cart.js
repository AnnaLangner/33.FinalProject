import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './Cart.css';

class Cart extends React.Component {

    render() {
        const {products, increaseProductAmount, decreaseProductAmount} = this.props;
        return (
            <div>
                <ul>
                    {products.length}
                    {products.map(item =>
                        <li>
                            {item.product.name}
                            <Button onClick={ () => {decreaseProductAmount(item.product._id)}} variant={'danger'} className={'buttonClick'}>-</Button>
                            <span>{item.amount}</span>
                            <Button onClick={ () => {increaseProductAmount(item.product._id)}} variant={'success'} className={'buttonClick'}>+</Button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

Cart.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};

export default withRouter(props => <Cart {...props}/>);