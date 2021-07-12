import Movie from "../../../../domain/models/movie";
import { Dispatch } from "redux";
import moviesService from '../../../../domain/repository/moviesService';
import { ActionTypes, MoviesAction } from "../movies/moviesActionTypes";

export const createMovieAsync = (movie: Movie) => {
    return async (dispatch: Dispatch<MoviesAction>) => {
        await moviesService.save(movie);
        dispatch({type: ActionTypes.ADD_MOVIE, payload: movie});
    };
  }