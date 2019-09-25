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
        {id: 'man(1)', brand: 'A&L', model: 'male', picture: 'man(1)'},
        {id: 'man(2)', brand: 'A&L', model: 'male', picture: 'man(2)'},
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
    return dispatch => {
        console.log('request starter...');
        setTimeout(() => {
            const test = [{id: '1', brand: 'A&L', model: 'male'}];
            dispatch(loadProducts(test));
            console.log('request finished alfter 2 sec');
        }, 2000)
    };
};