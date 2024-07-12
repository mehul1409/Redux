import { add_To_Cart } from "../Constant.js";

const initailState = {
    cartData: [],
}

export default function cartItem(state = initailState, action) {
    switch (action.type) {
        case add_To_Cart:
            return {
                ...state,
                cartData: action.type,
            }
            break;
        default:
            return state;
    }
}