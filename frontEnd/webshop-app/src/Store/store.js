import {createStore} from 'redux'
import Reducer from '../Reducer/reducer'
const store2 = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = {
    Items : [
    ]

}

fetch(`http://localhost:3005/products`)
        .then(res => res.json())
        .then(products => {
          store.Items.push(...products)
        })

export default store2;