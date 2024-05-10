import { combineReducers } from '@reduxjs/toolkit'

//taken from https://stackoverflow.com/questions/57472105/react-redux-useselector-typescript-type-for-state
const rootReducer = combineReducers({})

export type IRootState = ReturnType<typeof rootReducer>