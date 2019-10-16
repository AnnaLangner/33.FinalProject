import { connect } from 'react-redux';
import { getSingleProduct, getRequest, loadSingleProductRequest, resetRequest} from "../../../redux/productsRedux";
import SingleProduct from './SingleProduct';

const mapStateToProps = state => ({
    products: getSingleProduct(state),
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    loadProducts: (id) => dispatch(loadSingleProductRequest(id)),
    resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);