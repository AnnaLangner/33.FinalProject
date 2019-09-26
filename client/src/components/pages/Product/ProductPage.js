import React from 'react';
import ProductsList from "../../features/ProductsList/ProductsList";
import Product from "../../features/Product/ProductContainer";

const ProductPage = () => (
    <div>
        <ProductsList />
        <Product/>
    </div>
);

export default ProductPage;