
import {PRODUCT_PRICE_CHANGE} from "./iceCreamTypes";

const initialState = {}



const productReducer = (state = initialState, action)=>{
  switch (action.type){
    case PRODUCT_PRICECHANGE:{
      return {
        ...state,
      }
    }
    default: 
    return state;
  }
}

export default iceCreamReducer
