import axios from 'axios';

const API = '485660c8';

export function getMovies(movie){
    // console.log('ACTIONS works',movie)
    return {
        type: 'GET_MOVIES',
        payload: axios
        .get(
            `/api/s/${movie}`
        )
        .then(function(res){
            // console.log(res.data,'worked');
            return res.data
        })
        .catch(function(err){
            // console.log(err,'error')
        })
    }
}

export function updateSearch(movie){
    console.log(movie)
    return {
        type:'UPDATE_SEARCH',
        payload:movie
    }

}