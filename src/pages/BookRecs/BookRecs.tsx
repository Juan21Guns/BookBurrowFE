import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../../redux/bookRecsSlice";
import React, { useEffect } from "react";
import { IRootState } from "../../redux/IRootState";
import Books from "./Books";

const axios = require('axios').default

function BookRecs () {
    const dispatch = useDispatch();
    const todos = useSelector((state: IRootState) => state.bookRec.todos);

    const [books, setBooks] = React.useState(todos);

    useEffect(() => {
      removeBooks();
      getBooks();
    }, [])

    useEffect(() => {
      setBooks(todos);
    }, [todos])

    const removeBooks = () => {
      dispatch(removeTodo());
    }

    const getBooks = () => {
      //book searches 
      axios.get(`${import.meta.env.VITE_SERVER}/getOtherBooks?start=0&end=2`)
          .then((response: any) => {
            response.data.forEach((element: any) => {
              dispatch(addTodo(element));
            });
          })
          .catch((err: Error) => {
            console.log(err);
          })
          .finally()
    };

    return (
        <div className="bookRecs">
            <h1>See what others are reading!</h1>
            {books.map((book: any) => {
              return <Books book={book} key={book.bookISBN} />
            })}
        </div>
    )
}

export default BookRecs