import React from 'react';
import { PropTypes } from 'prop-types';

import SmallTitle from '../../common/SmallTitle/SmallTitle';
import jpg from '../../../../src/picture/men (1).jpg'
import HtmlBox from "../../common/HtmlBox/HtmlBox";

const ProductSummary = ({ id, content, name, price }) => (
    <article>
        <img src={jpg}/>
        <HtmlBox>{content}</HtmlBox>
        <SmallTitle>{name}</SmallTitle>
        <p>{price}</p>
    </article>
);

ProductSummary.propTypes = {
    id: PropTypes.string,
    content: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
};

export default ProductSummary;