import { combineReducers } from "redux";
import {ProductReducer} from './Product/ProductReducer'


const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream:iceCreamReducer,
  donut: donutReducer,
});


export default rootReducer;