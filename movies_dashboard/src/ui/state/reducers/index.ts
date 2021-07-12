import { combineReducers } from "redux";
import MoviesReducer from './moviesReducer'

const reducers = combineReducers({
    movies: MoviesReducer
})

export default reducers

export type State = ReturnType<typeof reducers>