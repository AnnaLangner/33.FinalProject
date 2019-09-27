import { connect } from 'react-redux';
import {getCartProducts, getRequest, loadProductsRequest} from "../../../redux/productsRedux";
import Product from './Product';

const mapStateToProps = state => ({
    products: getCartProducts(state),
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);