import * as constants from "../constants/books";

export const createBook = (payload) => ({
    type: constants.CREATE_BOOK,
    payload
})

export const updateBook = (payload) => ({
    type: constants.UPDATE_BOOK,
    payload
})
export const deleteBook = (payload) => ({
    type: constants.REMOVE_BOOK,
    payload
})
export const fetchBooks = (payload) => ({
    type: constants.FETCH_BOOKS,
    payload
})