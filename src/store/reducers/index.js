import { combineReducers } from "redux";
import books from './books'
import wishlist from './wishlist'

export default combineReducers({
    books,
    wishlist
})