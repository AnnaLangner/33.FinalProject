import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import men1 from '../../../picture/men1.jpg'
import Button from '../../common/Button/Button';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from "../../common/SmallTitle/SmallTitle";

const ProductSummary = ({ id, name, price, content }) => (
    <div className={'product-summary'}>
        <img src={men1}/>
        <SmallTitle>{name}</SmallTitle>
        <p>{price}</p>
        <HtmlBox>{content}</HtmlBox>
        <Button variant={'secondary'}><Link to={`/products/${id}`}>More about</Link></Button>
    </div>
);

ProductSummary.propTypes = {
    id: PropTypes.string,
    picture: PropTypes.object,
    name: PropTypes.string,
    price: PropTypes.string,
};

export default ProductSummary;