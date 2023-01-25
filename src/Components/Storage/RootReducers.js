const initialState = {
    cart: {},
    user: {},
    product: {},
    login: {}
}

export default function RootReducers(state = initialState, action) {

    switch (action.type) {
        case 'ADD_CART':
            state.cart[action.payload[0]] = action.payload[1];
            console.log("Redux Cart:", state.cart)
            return { cart: state.cart, user: state.user };

        case 'DELETE_CART':
            delete state.cart[action.payload[0]];
            console.log("Redux DELETE:", state.cart)
            return { cart: state.cart, user: state.user };

        case 'EMPTY_CART':
            state.cart={}
            return { cart: state.cart, user: state.user };

        case "ADD_USER":
            state.user[action.payload[0]] = action.payload[1];
            console.log("Redux User:", state.user)
            return { cart: state.cart, user: state.user };

        case 'ADD_WISHLIST':
            state.product[action.payload[0]] = action.payload[1];
            console.log("Redux Wishlist:", state.product)
            return { product: state.product };

        // case "LOGIN":
        //     state.login[action.payload[0]] = action.payload[1];
        //     console.log("Redux Login:", state.login)
        //     return { login: state.login };


        default:
            return state;
    }
}