import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from '../../store/actions/wishlist';
import { FaStar } from "react-icons/fa";
const Item = ({ item }) => {
    const dispatch = useDispatch();
    const [added, setAdded] = useState(false)
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"

    };
    const add = () => {
        if (added) {
            dispatch(actions.remove())
            setAdded(false)
        } else {
            dispatch(actions.add())
            setAdded(true)
        }

    }
    console.log(added)
    return (
        <li key={item.book_id} class="table-row">
            <div class="col col-1" data-label="Job Id">{item.book_name}</div>
            <div class="col col-2" data-label="Customer Name">{item.book_author}</div>
            <div class="col col-3" data-label="Amount">{item.book_categoryName}</div>
            <div class="col col-4" data-label="Amount">{item.book_count}</div>
            <div class="col col-5" className='book-list__buttons'>
                <button onClick={add}>
                    <FaStar
                        color={added ? colors.orange : colors.grey}
                    />
                </button>
            </div>
        </li>
    )
}
export default Item