import { connect } from 'react-redux';
import {
    getCartProducts,
    increaseProductAmount,
    decreaseProductAmount,
    updateCart,
    removeCartProduct
} from "../../../redux/cartRedux";
import Cart from './Cart';

const mapStateToProps = state => ({
    products: getCartProducts(state),
});

const mapDispatchToProps = dispatch => ({
    increaseProductAmount: id => dispatch(increaseProductAmount(id)),
    decreaseProductAmount: id => dispatch(decreaseProductAmount(id)),
    removeCartProduct: id => dispatch(removeCartProduct(id)),
    updateCart: () => dispatch(updateCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);