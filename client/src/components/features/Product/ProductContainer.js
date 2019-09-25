import { connect } from 'react-redux';
import  { getCartProducts, loadProductsRequest } from "../../../redux/productsRedux";
import Product from './Product';

const mapStateToProps = state => ({
    products: getCartProducts(state),
});

const mapDispatchToProps = dispatch => ({
    loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);