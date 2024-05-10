import { useDispatch, useSelector } from "react-redux"; 
import { IRootState } from "../redux/IRootState";
import React, { useEffect } from "react";
import { removeTodo } from "../redux/objectSlice";

function SearchResults () {
    const todos = useSelector((state: IRootState) => state.book.todos);
    const dispatch = useDispatch();
    console.log(todos);

    const [items, setItems] = React.useState(todos);

    useEffect(() => {
        setItems(todos);
    }, [todos])

    // const handleRemove = (itemNum) => {
    //     dispatch(removeTodo(items[itemNum]));
    // }

    return (
        <>
            {/* <button onClick={handleRemove}>Remove item</button> */}
            {items.map((item: any) => {
                return <img src={item.items[0].volumeInfo.imageLinks.thumbnail} key={item.id}></img>
            })}
        </>
    )
}

export default SearchResults;