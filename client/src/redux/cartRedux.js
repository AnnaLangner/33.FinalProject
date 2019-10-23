import {endRequest, errorRequest, startRequest} from "./productsRedux";
import axios from 'axios';

/* SELECTORS */

export const getCartProducts = ({ products }) => {
    return products.cart.map(cartProduct => {
        return { product: products.data.find(item => item.id === cartProduct.id), amount: cartProduct.amount }
    })
};

/* ACTIONS */

// action name creator

export const LOAD_CART = 'LOAD_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const SET_DISCOUNT = 'SET_DISCOUNT';
export const UPDATE_CART = 'UPDATE_CART';
export const UPDATE_SORT = 'UPDATE_SORT';

export const loadCart = products => ({ type: LOAD_CART, payload: products});
export const addProduct = product => ({ type: ADD_PRODUCT, payload: product});
export const removeProduct = product => ({ type: REMOVE_PRODUCT, payload: product});
export const setDiscount = product => ({ type: SET_DISCOUNT, payload: product});
export const updateCart = cartProducts => dispatch => {
    let productQuantity = cartProducts.reduce((sum, p) => {
        sum += p.quantity;
        return sum;
    }, 0);

    let totalPrice = cartProducts.reduce((sum, p) => {
        sum += p.price * p.quantity;
        return sum;
    }, 0);

    let installments = cartProducts.reduce((greater, p) => {
        greater = p.installments > greater ? p.installments : greater;
        return greater;
    }, 0);

    let cartTotal = {
        productQuantity,
        installments,
        totalPrice,
        currencyId: 'USD',
        currencyFormat: '$'
    };

    dispatch({
        type: UPDATE_CART,
        payload: cartTotal
    });
};
export const updateSort = sort => ({ type: UPDATE_SORT, payload: sort});

/* INITIAL STATE */

const initialState = {
    products: [],
    cart: [{ product: 1, amount: 2 }],
    data: {
        productQuantity: 0,
        installments: 0,
        totalPrice: 0,
        currencyId: 'USD',
        currencyFormat: '$'
    },
    type: '',
    value: 0,
};

/* REDUCER */
export default function cartRedux(state = initialState, action) {
    switch (action.type) {
        case LOAD_CART:
            return {
                ...state,
                products: action.payload
            };
        case ADD_PRODUCT:
            return {
                ...state,
                productToAdd: Object.assign({}, action.payload)
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                productToRemove: Object.assign({}, action.payload)
            };
        case SET_DISCOUNT:
            return {
                ...state,
                value: action.payload
            };
        case UPDATE_CART:
            return {
                ...state,
                data: action.payload
            };
        case UPDATE_SORT:
            return {
                ...state,
                type: action.payload
            };
        default:
            return state;
    }
}

/* THUNKS */
// export const loadCartRequest = () => {
//     return async dispatch => {
//         dispatch(startRequest());
//         try {
//             dispatch(loadCart(res.products));
//             dispatch(endRequest());
//         } catch (e) {
//             dispatch(errorRequest(e.message));
//         }
//     };
// };
//
// export const addProductRequest = (product) => {
//     return async dispatch => {
//         dispatch(startRequest());
//         try {
//             //tu nie wiem co ma być ;/
//             let res = await axios.product(product);
//             dispatch(addProduct(res.products));
//             dispatch(endRequest());
//         } catch (e) {
//             dispatch(errorRequest(e.message));
//         }
//     }
// };

