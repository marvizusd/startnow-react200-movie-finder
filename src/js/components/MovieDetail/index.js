import { connect } from 'react-redux';
import MovieDetail from './MovieDetailContainer';

function mapStoreToProps(store) {
    console.log('Connected with index MovieDetail',store.detail.Title)
    return {
        Title:store.detail.Title,
        Plot:store.detail.Plot,
        Release:store.detail.Release,
        RunTime:store.detail.RunTime,
        Genre:store.detail.Genre,
        Metascore:store.detail.Metascore,
        imdbRating:store.detail.imdbRating,
        Poster:store.detail.Poster,
        noResult:false
    };
}

export default connect(mapStoreToProps)(MovieDetail);