  
//import store from "../Store/store";
import { ADD, REMOVE } from "../Store/action";

const testData = {
    products: [{sku: 'kisku', price: 211, name: 'Kiskutya', qty: 33 },
    {sku: 'kisci', price: 333, name: 'Kiscica', qty: 34 },
    {sku: 'kisha',price: 456, name: 'Kishalacska', qty: 23 },
    {sku: 'sargka',price: 789, name: 'Sárgakacsa', qty: 3 },
    {sku: 'barku',price: 2166, name: 'Barnakutya', stock: 55 },
    {sku: 'keci',price: 323, name: 'Kékcica', stock: 13 },
    {sku: 'fuha',price: 476, name: 'Furahalacska', stock: 56 },
    {sku: 'mima',price: 7209, name: 'Milyenkacsa', stock: 7 },],
    cartItems: []
}


export default function Reducer(state = testData, action) {
    const newState = { ...state }
    const support =  newState.cartItems.find(element => element.name === action.product.name)
    switch(action.type) {
        case ADD: 
        if(support){
            newState.cartItems = newState.cartItems.filter(element => element.name !== support.name )
            support.pieces ? support.pieces = support.pieces + 1 : support.pieces = 1 
            newState.cartItems.push(support)
        }else{
            newState.cartItems.push(action.product)
        }
        newState.cartItems = [...newState.cartItems]
        return {
            ...state,
            cartItems: newState.cartItems
            }
        
        case REMOVE:
        if(support){
            newState.cartItems = newState.cartItems.filter(element => element.name !== support.name )
            support.pieces ? support.pieces = support.pieces - 1 : support.pieces = 0
            newState.cartItems.push(support)
        }else{
            newState.cartItems.push(action.product)
        }
        newState.cartItems = [...newState.cartItems]
        return {
            ...state,
            cartItems: newState.cartItems
            }
        
        default : return state;
    }
}