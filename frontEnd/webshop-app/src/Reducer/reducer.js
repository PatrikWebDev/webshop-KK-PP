import { ADD, REMOVE, EMPTY, DATALOADED, ORDER } from "../Store/action";


const testData = {
    products: [],
    cartItems: [],
    orders: []
}


export default function reducer(state = testData,  action) {
    const newState = {};
    const newOrders = {};
    newState.cartItems = [...state.cartItems];
    newOrders.orders = [...state.orders];
        const specificItem =  newState.cartItems.find(element => element.name === action.product.name)
        const index = newState.cartItems.findIndex(element => element.name === action.product.name)
    switch(action.type) {
        case ADD: 
        if(specificItem){
            specificItem.pieces ? specificItem.pieces = specificItem.pieces + 1 : specificItem.pieces = 1 
            newState.cartItems[index] = specificItem
        }else{
            action.product.pieces = 1
            newState.cartItems.push(action.product)
        }
        return {
            ...state,
            cartItems: newState.cartItems
            }
        
        case REMOVE:
        if(specificItem){
            specificItem.pieces ? specificItem.pieces = specificItem.pieces - 1 : specificItem.pieces = 0
            if(specificItem.pieces === 0){
                newState.cartItems = newState.cartItems.filter(element => element.name !== specificItem.name)
            }else{
                newState.cartItems[index] = specificItem
            }
        }else{
            newState.cartItems.push(action.product)
        }

        return {
            ...state,
            cartItems: newState.cartItems
            }

        case EMPTY:
            return {
                ...state,
                cartItems: []
            }

        case ORDER:
            newOrders.orders.push(action.details)
        return {
            ...state,
            orders: newOrders.orders,
            cartItems: []
        }

        case DATALOADED:
            return {
                ...state,
                products: action.products,
                cartItems: []
            }
        
        default : return {
            ...state
        }
    }
}