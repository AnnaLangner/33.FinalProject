/* SELECTORS */

export const getCartProducts = ({ cart, products }) => {
    return cart.data.map(cartProduct => {
        return { product: products.data.find(product => product.id === cartProduct.product), amount: cartProduct.amount }
    })
};

/* ACTIONS */

// action name creator

export const LOAD_CART = 'LOAD_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const INCREASE_PRODUCT = 'INCREASE_PRODUCT';
export const DECREASE_PRODUCT = 'DECREASE_PRODUCT';
// export const SET_DISCOUNT = 'SET_DISCOUNT';
// export const UPDATE_CART = 'UPDATE_CART';

export const loadCart = products => ({ type: LOAD_CART, payload: products});
export const addProductToCart = product => ({ type: ADD_PRODUCT, payload: product});
export const removeCartProduct = product => ({ type: REMOVE_PRODUCT, payload: product});
export const increaseProductAmount = id => ({ type: INCREASE_PRODUCT, payload: id });
export const decreaseProductAmount = id => ({ type: DECREASE_PRODUCT, payload: id });
/* export const setDiscount = product => ({ type: SET_DISCOUNT, payload: product});
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
}; */

/* INITIAL STATE */

const initialState = {
    data: [{ product: "5d9591f62abbb22bdc7f552e", amount: 1 }],
    currencyId: 'USD',
    currencyFormat: '$'
};

/* REDUCER */
export default function cartRedux(state = initialState, action) {
    switch (action.type) {
        case LOAD_CART:
            return {
                ...state,
                data: action.payload
            };
        case ADD_PRODUCT:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case REMOVE_PRODUCT:
            let newData = state.data.filter(product => product.id !== action.payload)
            return { ...state, data: newData };
        case INCREASE_PRODUCT:
            return {...state, data: state.data.map(item => (item.product !== action.payload) ? item : { ...item, amount: item.amount+1 }) }
        case DECREASE_PRODUCT:
            return {...state, data: state.data.map(item => (item.product !== action.payload) ? item : { ...item, amount: item.amount-1 }) }
        /*case SET_DISCOUNT:
            return {
                ...state,
                value: action.payload
            };
        case UPDATE_CART:
            return {
                ...state,
                data: action.payload
            }; */
        default:
            return state;
    }
}

