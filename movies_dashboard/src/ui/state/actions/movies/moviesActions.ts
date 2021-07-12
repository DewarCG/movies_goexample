import { ActionTypes, MoviesAction } from './moviesActionTypes';
import Movie from '../../../../domain/models/movie';
import moviesClient from '../../../../domain/repository/moviesService';

export function createMovie(movie: Movie): MoviesAction {
    return {
        type: ActionTypes.ADD_MOVIE,
        payload: movie,
    };
}

export function createMovieAsync(movie: Movie) {
    return async (dispacth: any) => {
      await moviesClient.save(movie);
      dispacth(createMovie(movie));
    };
  }