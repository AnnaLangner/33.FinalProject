import React from 'react';
import { PropTypes } from 'prop-types';

import SmallTitle from '../../common/SmallTitle/SmallTitle';
import jpg from '../../../../src/picture/men (1).jpg'

const ProductSummary = ({ id, name, price }) => (
    <article>
        <img src={'jpg'}/>
        <SmallTitle>{name}</SmallTitle>
        <p>{price}</p>
    </article>
);

ProductSummary.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
};

export default ProductSummary;