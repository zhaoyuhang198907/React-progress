import {createStore} from 'redux'
import reducers from './reducer/index'
let store=createStore(reducers);
export default store;