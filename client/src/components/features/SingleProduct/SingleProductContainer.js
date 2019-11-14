import { connect } from 'react-redux';
import { getSingleProduct, getRequest, loadSingleProductRequest, resetRequest} from "../../../redux/productsRedux";
import { addProductToCart } from "../../../redux/cartRedux";
import SingleProduct from './SingleProduct';

const mapStateToProps = state => ({
    product: getSingleProduct(state),
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    loadProducts: (id) => dispatch(loadSingleProductRequest(id)),
    resetRequest: () => dispatch(resetRequest()),
    addCartProduct: (product) => dispatch(addProductToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);