import { createSlice, nanoid } from '@reduxjs/toolkit'

interface books {
    bookAuthor: string,
    bookDescription: string,
    bookISBN: string,
    bookId: number,
    bookImage: string,
    bookSmallImage: string,
    bookSubtitle: string,
    bookTitle: string,
    pageCount: number,
    previewLink: string,
}

interface bookState {
    todos: books[],
}

const is = {
    todos: [
        {
            bookAuthor: "undefined",
            bookDescription: "undefined",
            bookISBN: "undefined",
            bookId: 0,
            bookImage: "undefined",
            bookSmallImage: "undefined",
            bookSubtitle: "undefined",
            bookTitle: "undefined",
            pageCount: 0,
            previewLink: "undefined",
        }
    ]
}

const initialState = is satisfies bookState as bookState;

const bookRecsSlice = createSlice ({
    name: 'bookRecs',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const ap = action.payload;
            const todo = {
                bookAuthor: ap.bookAuthor,
                bookDescription: ap.bookDescription,
                bookISBN: ap.bookISBN,
                bookId: ap.bookId,
                bookImage: ap.bookImage,
                bookSmallImage: ap.bookSmallImage,
                bookSubtitle: ap.bookSubtitle,
                bookTitle: ap.bookTitle,
                pageCount: ap.pageCount,
                previewLink: ap.previewLink,
            }

            state.todos.push(todo);
        },
        removeTodo: (state) => {
            state.todos = [];
        }
    },
})

export const { addTodo, removeTodo } = bookRecsSlice.actions;
export default bookRecsSlice.reducer;