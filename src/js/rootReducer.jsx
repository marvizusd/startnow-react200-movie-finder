import { combineReducers } from 'redux';
import MovieDetailReducer from './components/MovieDetail/movieDetailReducer';
import MovieSearchReducer from './components/MovieSearch/movieSearchReducer';

const rootReducer = combineReducers({
    detail: MovieDetailReducer,
    search: MovieSearchReducer
});

export default rootReducer;