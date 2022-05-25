import React, {useState} from "react";
import './styles/crud.css';
import BookList from "../components/book-list/BookList";
import Modal from "../components/modal/Modal";
import CrudForm from "../components/crud-form/CrudForm";
const Crud = () => {
    const [modalActive, setModalActive] = useState(false);
    return(
        <div className="container">
            <div className="crud-wrapper">
                <div className="crud-title__wrapper">
                    <h3>Online Library Books</h3>
                    <button onClick={() => setModalActive(true)} className="crud-title__button">New Books</button>
                </div>
                <BookList/>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <h2 className="create-title">Добавить книгу</h2>
                <CrudForm setActive={setModalActive}/>
            </Modal>
        </div>
        
    )
}
export default Crud