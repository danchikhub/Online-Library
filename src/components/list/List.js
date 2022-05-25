import React, {useState} from "react";
import Item from "../item/Item";
const List = ({items}) => {
    
    return(
        <ul class="responsive-table">
        <li class="table-header">
        <div class="col col-1">Название Книги</div>
        <div class="col col-2">Автор</div>
        <div class="col col-3">Категория</div>
        <div class="col col-4">Количество</div>
        <div class="col col-5"></div>
        </li>
        {

            items.map(item => {
                return  <Item key={item.id} item={item}/>
            }) 
        }
       
        
       
    </ul>
    )
}
export default List