import { PRODUCT_PRICE_CHANGE } from "./iceCreamTypes";


export const productPriceCahnge = ()=>{
    return {
       type: PRODUCT_PRICE_CHANGE,
       info: 'Price changed.'
    }
}