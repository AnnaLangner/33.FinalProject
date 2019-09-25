import axios from 'axios'
import { API_URL } from '../config';

/* SELECTORS */

export const getCartProducts = ({ products }) => {
    return products.cart.map(cartProduct => {
        return { product: products.data.find(item => item.id === cartProduct.id), amount: cartProduct.amount }
    })
};

/* ACTIONS */

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS});

/* INITIAL STATE */
const initialState = {
    data: [
        {id: 'man(1)', name: 'Product 1', brand: 'A&L', model: 'male', picture: 'man(1)'},
        {id: 'man(2)', name: 'Product 2', brand: 'A&L', model: 'male', picture: 'man(2)'},
    ],
    cart: [{ product: 1, amount: 2 }]
};

/* REDUCER */
export default function productsRedux(statePart = initialState, action = {}) {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return [...action.payload];
        default:
            return statePart;
    }
};

/* THUNKS */

export const loadProductsRequest = () => {
    return async dispatch => {
        try {
            let res = await axios.get(`${API_URL}/products`);
            dispatch(loadProducts(res.data));
        } catch(e) {
            console.log(e.message);
        }
    };
};