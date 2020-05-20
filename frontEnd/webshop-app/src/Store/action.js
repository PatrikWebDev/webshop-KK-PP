import { v4 as uuidv4 } from 'uuid';
const ADD = 'ADD';
const REMOVE = 'REMOVE';
const CHECKOUT = 'CHECKOUT'
const EMPTY = 'EMPTY'
const DATALOADED = 'DATALOADED'
const ORDER = 'ORDER'

function add(product) {
    return {
        type: ADD,
        product
    }
}

function order(name, address, productID) {
  return{
    type: ORDER,
    product: [{name: undefined}],
    details: {
      orderID: uuidv4(),
      name: name ,
      address: address,
      productID: [...productID],
    }
  }
}

function remove(product) {
  return {
    type: REMOVE,
    product
  }
}

function checkout(name, price, pieces) {
  return {
    type: CHECKOUT,
    name, price, pieces
  }
}

function empty(){
  return{
    type: EMPTY,
    product: {}
  }
}

export {add, ADD, REMOVE, remove, CHECKOUT, checkout, EMPTY, empty, DATALOADED, order, ORDER}