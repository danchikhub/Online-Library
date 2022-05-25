class BookService {
    
    async create(book) {
        let books = await JSON.parse(localStorage.getItem("books"))
        if(!Array.isArray(books)) {
                books = [];
        }
        let res = [...books, book]
        localStorage.setItem('books', JSON.stringify(res))
        return res
    }
    async update(book) {
        let books = await JSON.parse(localStorage.getItem("books"))
        let res = books.map(item => {
            if(item.book_id === book.book_id) {
                item = book
            }
            return item
        })
        localStorage.setItem('books', JSON.stringify(res))
        return res
    }
    async delete(book) {
        let books = await JSON.parse(localStorage.getItem("books"))
        let res = books.filter(item => item.book_id !== book.book_id)
        localStorage.setItem('books', JSON.stringify(res))
        return res
    }
    async getAll() {
        let books = await JSON.parse(localStorage.getItem("books"))
        if(books == null) {
             books = [];
         }
        return books
    }
}
export default new BookService()