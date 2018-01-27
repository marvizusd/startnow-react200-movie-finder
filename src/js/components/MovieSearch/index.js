import { connect } from 'react-redux';
import MovieSearch from './MovieSearchContainer';

function mapStoreToProps(store) {
    // console.log('Connected with index MovieSearch', store.search.top5)
    return {
        search:store.search.search,
        top5:store.search.top5,
        noResult:false
    };
}

export default connect(mapStoreToProps)(MovieSearch);