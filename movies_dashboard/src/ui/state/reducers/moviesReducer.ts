import MoviesState from "../models/moviesState";
import { ActionTypes, MoviesAction } from "../actions/movies/moviesActionTypes";

const initialState: MoviesState = {
    movies: []
}

const moviesReducer = (state: MoviesState = initialState , action: MoviesAction) => {
    let newState = state
    switch (action.type) {
        case ActionTypes.ADD_MOVIE:
            newState = { movies: state.movies.concat(action.payload) }
            break;
        default:
            break;
    }
    return newState
}
export default moviesReducer