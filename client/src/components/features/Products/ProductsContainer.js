import { connect } from 'react-redux';
import {getProducts, getRequest, loadProductByPageRequest, getPages, getPresentPage} from "../../../redux/productsRedux";
import Products from './Products';

const mapStateToProps = state => ({
    products: getProducts(state),
    request: getRequest(state),
    pages: getPages(state),
    presentPage: getPresentPage(state),
});

const mapDispatchToProps = dispatch => ({
    loadProductByPage: (page, productPerPage) => dispatch(loadProductByPageRequest(page, productPerPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);