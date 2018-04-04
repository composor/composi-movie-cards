import {h} from 'composi';
import MovieCard from './movieCard';

const getMovies = (movies) => {
  return (
    <div className="card-deck">
      {
        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
      }
    </div>
  );
};

const MovieList = (props) => (
  <div>
    {getMovies(props.movies)}
  </div>
);

export default MovieList;
