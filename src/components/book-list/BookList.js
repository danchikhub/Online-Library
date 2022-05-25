import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {FaEdit} from 'react-icons/fa';
import * as actions from '../../store/actions/books'
import { MdDeleteOutline } from "react-icons/md";
import UpdateForm from '../update-form/UpdateForm';
import Modal from '../modal/Modal'
import bookService from '../../service/book-service';
import './book-list.css';
const BookList = () => {
    const dispatch = useDispatch()
    const books = useSelector((store) => store.books.items)
    const [modalActive, setModalActive] = useState(false);
    const [currentBook, setCurrentBook] = useState({});
    const [deleteBook, setDeleteBook] = useState(false)
    const destroyBook = (book) =>  {
        bookService.delete(book).then(resolve => dispatch(actions.deleteBook(resolve)))
    }
    return(
        <div className='book-list'>
            
 
            <ul class="responsive-table">
                <li class="table-header">
                <div class="col col-1">Название Книги</div>
                <div class="col col-2">Автор</div>
                <div class="col col-3">Категория</div>
                <div class="col col-4">Количество</div>
                <div class="col col-5">Действие</div>
                </li>
                {

                    books.map(item => {
                        return  <li key={item.book_id} class="table-row">
                                    <div class="col col-1" data-label="Job Id">{item.book_name}</div>
                                    <div class="col col-2" data-label="Customer Name">{item.book_author}</div>
                                    <div class="col col-3" data-label="Amount">{item.book_categoryName}</div>
                                    <div class="col col-4" data-label="Amount">{item.book_count}</div>
                                    <div class="col col-5" className='book-list__buttons'>
                                        <button onClick={() => {setModalActive(true); setCurrentBook(item);}}><FaEdit size={20}/></button>
                                        <button onClick={() => {setModalActive(true); setCurrentBook(item); setDeleteBook(true)}}><MdDeleteOutline size={22}/></button>
                                    </div>
                                </li>
                    }) 
                }
               
                
               
            </ul>
            <Modal active={modalActive} setActive={setModalActive}>
                 <h2 className="create-title">{deleteBook ? "Удалить книгу?" : "Обновить книгу"}</h2>
                 {deleteBook ? 
                    <div className="buttons delete">
                        <button onClick={() => {destroyBook(currentBook); setModalActive(false)}}>Удалить</button><button onClick={() => setModalActive(false)}>Отмена</button>
                    </div> 
                    :
                    <UpdateForm item={currentBook} setActive={setModalActive}/>
                }
                
            </Modal>
        </div>
    )
}
export default BookList