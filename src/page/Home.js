import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import List from "../components/list/List";
import Filter from "../components/filter/Filter";
const Home = () => {
    const books = useSelector((store) => store.books.items)
    const [currentBooks, setCurrentBooks] = useState([])
    useEffect(() => {
        setCurrentBooks(books);
        document.title = "Online Labrary"
    }, [books])
    return (

        <div className="container">
            <Filter items={books} setItems={setCurrentBooks} />
            <List items={currentBooks} />
        </div>
    )
}
export default Home