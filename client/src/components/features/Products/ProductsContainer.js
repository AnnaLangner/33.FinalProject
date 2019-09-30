import { connect } from 'react-redux';
import {getProducts, getRequest, loadProductByPageRequest, getPages} from "../../../redux/productsRedux";
import Products from './Products';

const mapStateToProps = state => ({
    products: getProducts(state),
    request: getRequest(state),
    pages: getPages(state),
});

const mapDispatchToProps = dispatch => ({
    loadProductByPage: (page, productPerPage) => dispatch(loadProductByPageRequest(page, productPerPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);