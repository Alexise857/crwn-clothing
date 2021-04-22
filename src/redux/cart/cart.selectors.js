import {createSelector} from "reselect";

// Input Selector: it's a function that gets the whole state and just returns a slice of it one layer
const selectCart = state => state.cart;

// createSelector takes 2 arguments:
// 1.- a collection (array) of input selectors
// 2.- function that will return the value we want out of the selector, what we get on its parameters is
// actually each output of the input selectors in the array but in the order that those selectors were written
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
)
