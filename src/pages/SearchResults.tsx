import { useDispatch, useSelector } from "react-redux"; 
import { IRootState } from "../redux/IRootState";
import React, { useEffect } from "react";
import { removeTodo } from "../redux/objectSlice";

function SearchResults () {
    const todos = useSelector((state: IRootState) => state.book.todos);
    console.log(todos);

    const [items, setItems] = React.useState(todos);

    useEffect(() => {
        if (todos[0] == -1) {
            setItems([]);
        } else {
            setItems(todos);
        }
    }, [todos])

    return (
       <>
            {/* <button onClick={handleRemove}>Remove item</button> */}
            <p>Total Items: {items[0] === undefined ? 0 : items[0].totalItems}</p>
            {
                items.map((item: any) => {
                    return (
                        <div>
                            {item.items.map((book: any) => {
                                return (
                                    <img src={book.volumeInfo.imageLinks.thumbnail} key={item.id}></img>
                                )
                            })} 
                        </div>
                    )
                })
            }
        </>
    )
}

export default SearchResults;