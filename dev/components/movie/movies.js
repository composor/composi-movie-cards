import { h, Component } from 'composi';
import MovieList from './movieList';
import MovieService from '../../services/movieService';

export default class Movies extends Component {

  constructor(props) {
    super(props);
    this.container = 'section'
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.setState(() => ({ movies: MovieService.getMovies() }));
  }

  render() {
    return (
      <div className="container-fluid" style={{marginLeft: '-15px'}}>
        <div className="d-flex flex-row">          
          <div className="col-sm-12">
            <MovieList movies={this.state.movies} />
          </div>
        </div>
      </div>
    );
  }
}
