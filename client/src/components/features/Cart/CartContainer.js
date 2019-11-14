import { connect } from 'react-redux';
import { getCartProducts, increaseProductAmount, decreaseProductAmount } from "../../../redux/cartRedux";
import Cart from './Cart';

const mapStateToProps = state => ({
    products: getCartProducts(state),
});

const mapDispatchToProps = dispatch => ({
    increaseProductAmount: id => dispatch(increaseProductAmount(id)),
    decreaseProductAmount: id => dispatch(decreaseProductAmount(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);