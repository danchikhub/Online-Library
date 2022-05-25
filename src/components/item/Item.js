import React, {useState} from "react";

const Item = ({item}) => {
    return(
        <li key={item.book_id} class="table-row">
            <div class="col col-1" data-label="Job Id">{item.book_name}</div>
            <div class="col col-2" data-label="Customer Name">{item.book_author}</div>
            <div class="col col-3" data-label="Amount">{item.book_categoryName}</div>
            <div class="col col-4" data-label="Amount">{item.book_count}</div>
            <div class="col col-5" className='book-list__buttons'>
                    <button>Wish</button>
            </div>
        </li>
    )
}
export default Item