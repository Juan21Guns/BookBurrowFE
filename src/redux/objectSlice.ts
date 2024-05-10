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
        "title": string | null,
        "subtitle": string | null,
        "authors": string[] | null,
        "publisher": string | null,
        "publishedDate": string | null,
        "description": string | null,
        "industryIdentifiers": IndustryIdentifier[] | null,
        "pageCount": number | null,
        "imageLinks": {
        "smallThumbnail"?: string | null,
        "thumbnail": string | null,
        "large": string | null,
        "extraLarge": string | null,
        },
        "previewLink": string | null,
    } | null,
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
            if (action != null) {
                const todo = {
                    id: state.todos.length,
                    totalItems: action.payload.totalItems,
                    items: action.payload.items,
                }

                state.todos.push(todo);
            } else {
                const todo = {
                    id: 1,
                    totalItems: 0,
                    items: [
                        {
                            "id": "1",
                            "selfLink": "imageNull",
                            "volumeInfo": null
                        }
                    ]
                }
            
                state.todos.push(todo);
            }
        },
        removeTodo: (state) => {
            state.todos = [];
        }
    },
})

export const { addTodo, removeTodo } = objectSlice.actions;
export default objectSlice.reducer;