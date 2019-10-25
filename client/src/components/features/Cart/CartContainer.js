import { connect } from 'react-redux';
import { getCartProducts, loadCartRequest} from "../../../redux/cartRedux";
import {getRequest, resetRequest} from "../../../redux/productsRedux";
import Cart from './Cart';

const mapStateToProps = state => ({
    products: getCartProducts(state),
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    loadProducts: (id) => dispatch(loadCartRequest(id)),
    resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);