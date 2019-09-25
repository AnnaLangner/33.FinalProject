import React from 'react';
import ProductCounter from "../../features/ProductCounter/ProductCounter";
import Product from "../../features/Product/ProductContainer";

const ProductPage = () => (
    <div>
        <ProductCounter />
        <Product/>
    </div>
);

export default ProductPage;