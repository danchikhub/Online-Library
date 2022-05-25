import React, {useState} from "react";
import './crud-form.css';
import CustomSelect from "../custom-select/CustomSelect";
import { CATEGORY } from "../../utils/consts";
import { useSelector, useDispatch } from "react-redux";
import bookService from "../../service/book-service";
import * as actions from "../../store/actions/books"
const CrudForm = ({setActive}) => {
    const dispatch = useDispatch()
    const [bookName, setBookName] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookCategory, setBookCategory] = useState(0);
    const [bookCategoryName, setBookCategoryName] = useState('');
    const [bookCount, setBookCount] = useState(0);
    const books = useSelector((store) => store.books.items)
    const createBook = () => {
        let book = {
            book_id: books.length + 1,
            book_name: bookName,
            book_author: bookAuthor,
            book_categoryId: +bookCategory,
            book_categoryName: bookCategoryName,
            book_count: bookCount,
        }
        bookService.create(book).then(resolve => dispatch(actions.createBook(resolve)))
       
    }
    const onSelectChange = e => {
        
        const category_id = e.target.options[e.target.selectedIndex].value;
       
        const category_name = e.target.options[e.target.selectedIndex].innerText
        setBookCategory(category_id)
        setBookCategoryName(category_name)
    }
    return(
        <div>
            <input onChange={(e) => setBookName(e.target.value)} type="text" className="crudform-input" placeholder="Название книги"/>
            <input onChange={(e) => setBookAuthor(e.target.value)} type="text" className="crudform-input" placeholder="Автор книги"/>
            <CustomSelect selected={"Выберите катерогию"} selectedValue={0} onChange={onSelectChange} options={CATEGORY} styleClass={'select-category'} />
            <input onChange={(e) => setBookCount(+e.target.value)} type="text" className="crudform-input" placeholder="Количество книги"/>
            <div className="buttons">
                <button onClick={() => {createBook(); setActive(false)}}>Добавить</button><button onClick={() => setActive(false)}>Отмена</button>
            </div>
            
        </div>
    )

}
export default CrudForm