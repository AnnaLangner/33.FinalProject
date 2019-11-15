import { connect } from 'react-redux';
import { setSortOptions, getProductsSort} from "../../../redux/productsRedux";
import SideBar from './SideBar';

const mapStateToProps = state => ({
    products: getProductsSort(state),
});

const mapDispatchToProps = {
    setSortOptions
};

export default connect( mapStateToProps, mapDispatchToProps)(SideBar);