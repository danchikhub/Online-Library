import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../store/actions/books'
import List from "../components/list/List";
import Filter from "../components/filter/Filter";
import bookService from "../service/book-service";
const Home = () => {
    const dispatch = useDispatch()
    const books = useSelector((store) => store.books.items)
    
    const [currentBooks, setCurrentBooks] = useState([])
    useEffect(() => {
        setCurrentBooks(books)
    }, [books])
    return(

        <div className="container">
            <Filter items={books} setItems={setCurrentBooks}/>
            <List items={currentBooks}/>
        </div>
    )
}
export default Home