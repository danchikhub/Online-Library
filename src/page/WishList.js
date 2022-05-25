import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const WishList = () => {
    useEffect(() => {
        document.title = "WishList"
    }, [])
    const store = useSelector((store) => store.wishlist)
    console.log(store)
    return (
        <div className="wishlist-wrapper">
            <div>
                Выбранных книг: {store}
            </div>

        </div>
    )
}

export default WishList