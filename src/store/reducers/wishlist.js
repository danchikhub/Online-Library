import * as constants from "../constants/wishlist";

const initialState = 0

export default function wishlistReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type){
        case constants.ADD_WISHLIST:
            return ++state
        case constants.REMOVE_WISHLIST:
            return --state
        default:
            return state
    }
}