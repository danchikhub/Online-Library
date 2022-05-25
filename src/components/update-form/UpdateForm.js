import React, {useEffect, useState} from "react";
import './update-form.css';
import CustomSelect from "../custom-select/CustomSelect";
import { CATEGORY } from "../../utils/consts";
import { useSelector, useDispatch } from "react-redux";
import bookService from "../../service/book-service";
import * as actions from "../../store/actions/books";

const UpdateForm = ({item , setActive}) => {
    const dispatch = useDispatch()
    const [book, setBook] = useState({});
    useEffect(() => {
        setBook(item)
    },[item])
    
    
    const handleInputChange = e => {
        const { name, value } = e.target
        setBook({...book, [name]: value})
    }
    const onSelectChange = e => {
        
        const category_id = +e.target.options[e.target.selectedIndex].value;
        
        const category_name = e.target.options[e.target.selectedIndex].innerText
        setBook({...book, book_categoryId: category_id, book_categoryName: category_name})
    }
    const onUpdate = (book) => {
        bookService.update(book).then( resolve => dispatch(actions.updateBook(resolve)))
    }
    return (
        <div>
        <input 
            onChange={handleInputChange} 
            value={book.book_name} 
            name="book_name"  
            type="text" 
            className="crudform-input" 
        />
        <input 
            onChange={handleInputChange} 
            value={book.book_author} 
            name="book_author"  
            type="text" 
            className="crudform-input" 
        />
        <CustomSelect 
            selected={item.book_categoryName} 
            selectedValue={item.book_categoryId}  
            options={CATEGORY} 
            styleClass={'select-category'} 
            onChange={onSelectChange}
        />
        <input  
            name="book_count" 
            value={book.book_count}  
            type="text" 
            className="crudform-input" 
            onChange={handleInputChange} 
        />
        <div className="buttons">
            <button onClick={() => {onUpdate(book); setActive(false)}}>Обновить</button><button onClick={() => setActive(false)}>Отмена</button>
        </div>
        
    </div>
    )
}
export default UpdateForm;