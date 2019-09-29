import axios from 'axios'
import { API_URL } from '../config';

/* SELECTORS */

export const getCartProducts = ({ products }) => {
    return products.cart.map(cartProduct => {
        return { product: products.data.find(item => item.id === cartProduct.id), amount: cartProduct.amount }
    })
};
export const getRequest = ({ products }) => products.request;
export const getPages = ({ products }) => Math.ceil(products.amount / products.postsPerPage);

/* ACTIONS */

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_PRODUCT_PAGE = createActionName('LOAD_PRODUCT_PAGE');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS});
export const loadProductByPage = payload => ({ payload, type: LOAD_PRODUCT_PAGE });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

/* INITIAL STATE */
const initialState = {
    data: [
        {id: 'man(1)', name: 'Product 1', brand: 'A&L', model: 'male', picture: 'man(1)', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'},
        {id: 'man(2)', name: 'Product 2', brand: 'A&L', model: 'male', picture: 'man(2)', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'},
    ],
    cart: [{ product: 1, amount: 2 }],
    request: {
        pending: false,
        error: null,
        success: null,
    }
};

/* REDUCER */
export default function productsRedux(statePart = initialState, action = {}) {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return { ...statePart, data: action.payload };
        case LOAD_PRODUCT_PAGE:
            return {
                ...statePart,
                productPerPage: action.payload.productPerPage,
                presentPage: action.payload.presentPage,
                amount: action.payload.amount,
                data: [...action.payload.product],
            };
        case START_REQUEST:
            return { ...statePart, request: { pending: true, error: null, success: null } };
        case END_REQUEST:
            return { ...statePart, request: { pending: false, error: null, success: true } };
        case ERROR_REQUEST:
            return { ...statePart, request: { pending: false, error: action.error, success: false } };
        default:
            return statePart;
    }
};

/* THUNKS */

export const loadProductsRequest = () => {
    return async dispatch => {
        dispatch(startRequest());
        try {
            let res = await axios.get(`${API_URL}/products`);
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));
            dispatch(loadProducts(res.data));
            dispatch(endRequest());
        } catch(e) {
            dispatch(errorRequest(e.message));
        }
    };
};

export const loadProductByPageRequest = (page) => {
    return async dispatch => {

        dispatch(startRequest());
        try {

            const productPerPage = 10;

            const startAt = (page - 1) * productPerPage;
            const limit = productPerPage;

            let res = await axios.get(`${API_URL}/product/range/${startAt}/${limit}`);
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));

            const payload = {
                product: res.data.product,
                amount: res.data.amount,
                productPerPage,
                presentPage: page,
            };

            dispatch(loadProductByPage(payload));
            dispatch(endRequest());

        } catch(e) {
            dispatch(errorRequest(e.message));
        }

    };
};