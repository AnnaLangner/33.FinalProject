import { connect } from 'react-redux';
import {setSortOptions, getProductsSort } from "../../../redux/productsRedux";
import SideBar from './SideBar';

const mapStateToProps = state => ({
    products: getProductsSort(state),
});

const mapDispatchToProps = dispatch => ({
    setSortOptions: (key, direction) => dispatch(setSortOptions(key, direction)),
});

export default connect( mapStateToProps, mapDispatchToProps)(SideBar);