import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import men1 from "../../../picture/men1.jpg";
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from "../../common/SmallTitle/SmallTitle";

class Cart extends React.Component {

    componentDidMount() {
        const {loadProducts, resetRequest, match} =this.props;
        loadProducts(match.params.id);
        resetRequest();
    }

    render() {
        const {products} = this.props;
        return (
            <div>
                <img src={men1} alt={'cloth'}/>
                <SmallTitle>{products.name}</SmallTitle>
                <p>{products.price}</p>
                <HtmlBox>{products.content}</HtmlBox>
            </div>
        );
    }
}

Cart.propTypes = {
    products:
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
        }),

    loadProducts: PropTypes.func.isRequired,
    resetRequest: PropTypes.func.isRequired,
};

export default withRouter(props => <Cart {...props}/>);