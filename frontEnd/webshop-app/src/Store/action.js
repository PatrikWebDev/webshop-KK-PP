const ADD = 'ADD';
const REMOVE = 'REMOVE';
const CHECKOUT = 'CHECKOUT'

function add(product) {
    return {
        type: ADD,
        product
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

export {add, ADD, REMOVE, remove, CHECKOUT, checkout}