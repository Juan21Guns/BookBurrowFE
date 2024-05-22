import { useDispatch, useSelector } from "react-redux"; 
import { IRootState } from "../../redux/IRootState";
import React, { useEffect } from "react";
import { removeTodo } from "../../redux/objectSlice";
import sad from '../../assets/ImageNotFound.svg'
import Books from "./Books";

function SearchResults () {
    const todos = useSelector((state: IRootState) => state.book.todos);

    const [items, setItems] = React.useState(todos);

    useEffect(() => {
        setItems(todos);
    }, [todos])

    return (
       <>
            <p>Total Items: {items[0] === undefined ? 0 : items[0].totalItems}</p>
            {
                items.map((item: any) => {
                    return (
                        <div key={item.id}>
                            {item.items == null ? <p>No results, please check your spelling and try again</p> : 
                                item.items.map((book: any) => {
                                    const volume = book.volumeInfo;
                                    return (
                                        <>
                                            <Books volume={volume} selfLink={book.selfLink} />
                                        </>
                                    )
                                })
                            } 
                        </div>
                    )
                })
            }
        </>
    )
}

export default SearchResults;