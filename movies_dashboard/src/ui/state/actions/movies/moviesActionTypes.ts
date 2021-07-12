import Movie from '../../../../domain/models/movie';

export enum ActionTypes {
    ADD_MOVIE = 'ADD_MOVIE',
    DELETE_MOVIE = 'DELETE_MOVIE',
    FIND_MOVIES = 'FIND_MOVIES',
    FIND_MOVIE = 'FIND_MOVIE',
    UPDATE_MOVIE = 'UPDATE_MOVIE',
}

interface AddMovieAction { 
    type: ActionTypes.ADD_MOVIE,
    payload: Movie
}

interface DeleteMovieAction { 
    type: ActionTypes.DELETE_MOVIE,
    payload: Movie
}

interface FindMoviesAction { 
    type: ActionTypes.FIND_MOVIES
}

interface FindMovieAction { 
    type: ActionTypes.FIND_MOVIE,
    payload: number
}

interface UpdateMovieAction { 
    type: ActionTypes.UPDATE_MOVIE,
    payload: Movie
}

export type MoviesAction = 
    AddMovieAction |
    DeleteMovieAction |
    FindMoviesAction |
    FindMovieAction |
    UpdateMovieAction;