import * as constants from "../constants/books";

const initialState = {
    items: [
        
    ],
};

export default function booksReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case constants.FETCH_BOOKS: 
            return {items: [...state.items, ...payload]}
        case constants.CREATE_BOOK: 
            return {items: [...payload]}
        case constants.UPDATE_BOOK: 
            return {items: [...payload]}
        case constants.REMOVE_BOOK:
            return {items: [...payload]}
        default: 
            return state
    }
}
