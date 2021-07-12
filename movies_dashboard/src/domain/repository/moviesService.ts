import Movie from '../models/movie';
import axios from 'axios';

const URL = 'http://localhost:8080/api';

class MoviesService {
    async save(movie: Movie): Promise<number> {
        await axios.post(URL + '/movies', movie);
        return 0;
    }
}

export default new MoviesService();