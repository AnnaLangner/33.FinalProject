import { connect } from 'react-redux';
import {getCartProducts, getRequest, loadProductByPageRequest, getPages} from "../../../redux/productsRedux";
import Product from './Product';

const mapStateToProps = state => ({
    products: getCartProducts(state),
    request: getRequest(state),
    pages: getPages(state),
});

const mapDispatchToProps = dispatch => ({
    loadProductByPage: () => dispatch(loadProductByPageRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);