import { connect } from 'react-redux';
import {
    getRequest,
    loadProductByPageRequest,
    getPages,
    getProductsSort
} from "../../../redux/productsRedux";
import Products from './Products';

const mapStateToProps = state => ({
    products: getProductsSort(state),
    request: getRequest(state),
    pages: getPages(state),
});

const mapDispatchToProps = dispatch => ({
    loadProductByPage: (page, productPerPage) => dispatch(loadProductByPageRequest(page, productPerPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);