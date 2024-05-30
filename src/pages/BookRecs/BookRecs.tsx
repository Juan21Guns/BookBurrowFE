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
    const [start, setStart] = React.useState(0);
    const [end, setEnd] = React.useState(5);

    useEffect(() => {
      removeBooks();
      getBooks(start, end);
      setStart(start + 5);
      setEnd(end + 5);
    }, [])

    useEffect(() => {
      setBooks(todos);
    }, [todos])

    async function handleClick () {
      setStart(start + 5);
      setEnd(end + 5);
      const isNull = await getBooks(start, end);
      
      if (isNull.length == 0) {
        const button = document.getElementById("show-more");
        button?.setAttribute("disabled", "");
      }
    }

    const removeBooks = () => {
      dispatch(removeTodo());
    }

    const getBooks = (s: number, e: number) => {
      //book searches 
      return axios.get(`${import.meta.env.VITE_SERVER}/getOtherBooks?start=${s}&end=${e}`)
          .then((response: any) => {
            response.data.forEach((element: any) => {
              dispatch(addTodo(element));
            });
            
            return response.data;
          })
          .catch((err: Error) => {
            console.log(err);
          })
          .finally()
    }

    return (
        <div className="bookRecs">
            <h1>See what others are reading!</h1>
              {books.map((book: any) => {
                return (
                    <Books book={book} key={book.bookISBN} />
                )
              })}

              <button id="show-more" onClick={handleClick}>Show More</button>
        </div>
    )
}

export default BookRecs