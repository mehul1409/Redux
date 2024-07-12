import {add_To_Cart} from '../Constant.js' 

const addToCart = (data) =>{
    return{
        data:data,
        type:add_To_Cart,
    }
}

export default addToCart;