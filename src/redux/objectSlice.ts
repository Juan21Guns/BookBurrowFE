import { createSlice, nanoid } from '@reduxjs/toolkit'
import exampledata from './exampledata.json';

interface IndustryIdentifier {
    "type": string | null,
    "identifier": string | null
}

interface Book {
    "id": string,
    "selfLink": string,
    "volumeInfo": {
        "title": string,
        "subtitle": string | null,
        "authors": string[],
        "publisher": string,
        "publishedDate": string,
        "description": string | null,
        "industryIdentifiers": IndustryIdentifier[],
        "pageCount": number,
        "imageLinks": {
        "smallThumbnail"?: string | null,
        "thumbnail": string | null,
        "large": string | null,
        "extraLarge": string | null,
        },
        "previewLink": string,
    }
}

interface jsonBook {
    id: number;
    totalItems: number
    items: Book[]
}

interface ObjectState {
    todos: jsonBook[];
}

const initialState = exampledata satisfies ObjectState as ObjectState;

const objectSlice = createSlice ({
    name: 'book',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: state.todos.length,
                totalItems: action.payload.totalItems,
                items: action.payload.items,
            }

            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload.id
            });
        }
    },
})

export const { addTodo, removeTodo } = objectSlice.actions;
export default objectSlice.reducer;