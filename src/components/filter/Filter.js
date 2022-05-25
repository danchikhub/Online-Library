import React, { useState } from "react";
import CustomSelect from "../custom-select/CustomSelect";
import { CATEGORY } from "../../utils/consts";
import './filter.css'
const Filter = ({ items, setItems }) => {
    const authorsArray = items.map(item => item.book_author)
    const makeUniq = (arr) => [...new Set(arr)];
    const authors = makeUniq(authorsArray);
    let total = 0;
    let totalCategory = 0
    items.forEach((item) => {
        total += item.book_count
    })
    const sorted = items.sort((a, b) => {
        if (a.book_name > b.book_name) return 1;
        if (a.book_name < b.book_name) return -1;
        if (a.book_name == b.book_name) return 0;
    })
    const [currentBooks, setCurrentBooks] = useState(sorted);
    const [currentCategory, setCurrentCategory] = useState(0);
    const [currentAuthor, setCurrentAuthor] = useState('')
    const [active, setActive] = useState(false)
    currentBooks.forEach(item => {
        totalCategory += item.book_count
    })
    const onChangeCategory = (e) => {

        const category_id = +e.target.options[e.target.selectedIndex].value;
        if (category_id === 0) {
            setActive(false);
            setItems(sorted);

        } else {
            setActive(true)
            const result = sorted.filter(item => item.book_categoryId === category_id)
            setItems(result)
            setCurrentBooks(result)
        }


        setCurrentCategory(category_id)
    }
    const onChangeAuthor = (e) => {
        const authorName = e.target.options[e.target.selectedIndex].value;
        console.log(authorName)
        if (authorName === '0') {

            const result = sorted.filter(item => item.book_categoryId === currentCategory)
            setItems(result)
            setCurrentBooks(result)
            setCurrentAuthor('')
        } else {
            const result = currentBooks.filter(item => item.book_author === authorName)
            setItems(result)

            setCurrentAuthor(authorName)
        }

    }
    return (
        <div className="filter">
            <h2 className="total-book">Всего книг: {total}</h2>
            <div className="filter-wrapper">
                <div className="filter-category">
                    <CustomSelect onChange={onChangeCategory} selected={"Все категории"} selectedValue={0} options={CATEGORY} styleClass={'select-category filter'} />
                </div>
                <div className="filter-author">
                    <select onChange={onChangeAuthor} className="select-category">
                        <option value={0} selected >Все авторы</option>
                        {

                            authors.map((option, index) =>
                                <option key={index} value={option}>{option}</option>
                            )
                        }
                    </select>
                </div>

            </div>
            {
                active ? <div>В категории книг: {totalCategory}</div> : ''
            }

        </div>

    )
}
export default Filter