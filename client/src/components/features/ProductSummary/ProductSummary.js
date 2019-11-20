import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from "../../common/SmallTitle/SmallTitle";

const ProductSummary = ({ id, name, price, content, products, image }) => (
    <div className={'product-summary'}>
        <img className={'img-fashion'} src={products} alt={'cloth'}>{image}</img>
        <SmallTitle>{name}</SmallTitle>
        <p>{price}</p>
        <HtmlBox>{content}</HtmlBox>
        <Button variant={'secondary'}><Link to={`/products/${id}`}>More about</Link></Button>
    </div>
);

ProductSummary.propTypes = {
    id: PropTypes.string,
    image: PropTypes.object,
    name: PropTypes.string,
    price: PropTypes.string,
};

export default ProductSummary;